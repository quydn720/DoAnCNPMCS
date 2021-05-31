var express = require('express');
var router = express.Router();
var { db, auth, firebaseApp } = require('../../config/firebase-config');
var { ensureAuthenticated } = require('../../config/auth-config');

var validator = require('../../config/validator-config');
var signUpSchema = require('../../schemas/signUpSchema');
/**
 * @swagger
 * tags:
 *  name: NguoiDung
 *  description: Người dùng
 */

/**
 * @swagger
 * /api/nguoi-dung/thong-tin:
 *  get:
 *      summary: Lấy thông tin tài khoản
 *      tags: [NguoiDung]
 *      responses:
 *          200:
 *              description: Thông tin tài khoản
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              success:
 *                                  type: boolean
 *                                  description: Trạng thái trả về
 *                              data:
 *                                  type: object
 *                                  properties:
 *                                      ten_nguoi_dung: 
 *                                          type: string
 *                                      ten_tai_khoan: 
 *                                          type: string
 *                                      email: 
 *                                          type: string
 *                                      dia_chi:
 *                                          type: string
 *                                      so_dien_thoai:
 *                                          type: string
 * 
 */
router.get('/thong-tin', ensureAuthenticated, async (req, res) => {
    db.collection('NguoiDung').doc(req.user.uid).get().then((doc) => {
        return res.json({ success: true, data: doc.data() });
    });
});

/**
 * @swagger
 * /api/nguoi-dung:
 *  post:
 *      summary: Đăng ký tài khoản
 *      tags: [NguoiDung]
 *      requestBody:
 *          required: true
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      type: object
 *                      properties:
 *                         ten_nguoi_dung: 
 *                             type: string
 *                         ten_tai_khoan: 
 *                             type: string
 *                         mat_khau:
 *                             type: string
 *                         email: 
 *                             type: string
 *                         dia_chi:
 *                             type: string
 *                         so_dien_thoai:
 *                             type: string
 *                      required:
 *                          ten_nguoi_dung
 *                          ten_tai_khoan
 *                          mat_khau
 *                          email
 *      responses:
 *          200:
 *              description: Thông tin người dùng vừa tạo
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              success:
 *                                  type: boolean
 *                                  description: Trạng thái trả về
 *                              data:
 *                                  type: object
 *                                  properties:
 *                                      ten_nguoi_dung: 
 *                                          type: string
 *                                      ten_tai_khoan: 
 *                                          type: string
 *                                      email: 
 *                                          type: string
 *                                      dia_chi:
 *                                          type: string
 *                                      so_dien_thoai:
 *                                          type: string
 * 
 */
router.post('/', validator(signUpSchema), async function (req, res) {
    existUsers = await db.collection('NguoiDung').where("ten_tai_khoan", "==", req.body.ten_tai_khoan).get();
    if (!existUsers.empty) {
        return res.json({ success: false, message: "The password is invalid or the user does not have a password." });
    }
    firebaseApp.auth().createUserWithEmailAndPassword(req.body.email, req.body.mat_khau)
        .then((userCredential) => {
            let userInfo = {
                ten_nguoi_dung: req.body.ten_nguoi_dung,
                ten_tai_khoan: req.body.ten_tai_khoan,
                email: req.body.email,
                dia_chi: req.body.dia_chi || '',
                so_dien_thoai: req.body.so_dien_thoai || '',
                loai_nguoi_dung: 'KhachHang'
            };
            auth.setCustomUserClaims(userCredential.user.uid, { role: 'KhachHang' });
            db.collection('NguoiDung').doc(userCredential.user.uid)
                .create(userInfo)
                .then(() => {
                    return res.json({ success: true, data: userInfo });
                })
        })
        .catch((err) => {
            return res.json({ success: false, message: err.message });
        })
});

module.exports = router;