const express = require('express');
const router = express.Router();

/* GET post page. */
router.get('/', (req, res, next) => {
  res.send('INDEX /posts');
});

/* GET post /posts/new */
router.get('/new', (req, res, next) => {
  res.send('/posts/new');
});

/* POST post /posts/ */
router.post('/', (req, res, next) => {
  res.send('CREATE /posts');
});

/* GET post /posts/ */
router.get('/:id', (req, res, next) => {
  res.send('SHOW /posts/:id');
});

/* PUT post /posts/ */
router.get('/:id/edit', (req, res, next) => {
  res.send('EDIT/posts/:id/edit');
});

/* GET post /posts/ */
router.put('/:id', (req, res, next) => {
  res.send('EDIT/posts/:id/edit');
});

/* GET post /posts/ */
router.delete('/:id', (req, res, next) => {
  res.send('DELETE /posts/:id/edit');
});

module.exports = router;
