var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Trang chủ' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Đăng nhập' });
});
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Đăng ký' });
});
router.get('/product', function(req, res, next) {
  res.render('product', { title: 'Chi tiết sản phẩm' });
});

router.get('/list', function(req, res, next) {
  res.render('list', { title: 'Danh sách sản phẩm' });
});

module.exports = router;
