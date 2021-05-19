var express = require('express');
var router = express.Router();

var authRouter = require('./auth');
var nguoiDungRouter = require('./nguoiDung');

router.use('/nguoi-dung', nguoiDungRouter);
router.use('/auth', authRouter);

router.get('/', (req, res) => {
    res.send('api Route');
})
module.exports = router;