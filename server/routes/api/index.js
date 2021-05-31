var express = require('express');
var router = express.Router();

var authRouter = require('./auth');
var nguoiDungRouter = require('./nguoiDung');
var sanPhamRouter = require('./sanPham');

router.use('/nguoi-dung', nguoiDungRouter);
router.use('/auth', authRouter);
router.use('/san-pham', sanPhamRouter);
router.get('/', (req, res) => {
    res.status(403).send('Forbidden Route');
})
module.exports = router;