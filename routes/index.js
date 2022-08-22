const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Neriosoft Shop - Home' });
});

/* GET register. */
router.get('/register', (req, res, next) => {
  res.send('GET: /register');
});

/* POST register. */
router.post('/register', (req, res, next) => {
  res.send('POST: /register');
});

/* GET login */
router.get('/login', (req, res, next) => {
  res.send('GET: /login');
});

/* POST login */
router.post('/login', (req, res, next) => {
  res.send('POST: /login');
});

/* GET profile */
router.get('/profile', (req, res, next) => {
  res.send('GET: /profile');
});

/* PUT update profile/:user_id */
router.put('/profile profile/:user_id', (req, res, next) => {
  res.send('PUT: /profile/:user_id');
});

/* GET forgot-password */
router.get('/forgot', (req, res, next) => {
  res.send('GET: /forgot');
});

/* PUT forgot-password */
router.put('/forgot', (req, res, next) => {
  res.send('PUT: /forgot');
});

/* GET reset-password */
router.get('/reset-pw/:token', (req, res, next) => {
  res.send('GET: /reset-pw/:token');
});

/* PUT reset-password */
router.put('/reset-pw/:token', (req, res, next) => {
  res.send('PUT: /reset-pw/:token');
});


module.exports = router;
