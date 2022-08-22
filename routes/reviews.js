const express = require('express');
const router = express.Router({ mergeParams: true});

/* GET reviews index. /posts/:id/reviews/new */
router.get('/', (req, res, next) => {
  res.send('INDEX: /posts/:id/reviews');
});

/* GET reviews new posts/:id/reviews */
router.post('/', (req, res, next) => {
  res.send('CREATE: /reviews');
});

/* GET review edit /reviews/:review_id/edit */
router.get('/:review_id/edit', (req, res, next) => {
  res.send('EDIT: /posts/:id/reviews/:review_id/edit');
});

/* PUT review /reviews/ */
router.put('/:review_id', (req, res, next) => {
  res.send('UPDATE: /posts/:id/reviews/:review_id');
});

/* GET review destroy /reviews/:review_id */
router.delete('/:id', (req, res, next) => {
  res.send('DELETE: /posts/:id/reviews/:review_id');
});

module.exports = router;
