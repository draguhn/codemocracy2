const router = require('express').Router();
const topics = require('./controllers/topic.controllers');

router.get('/topics', topics.getTopic);
router.post('/topics', topics.postTopic);
// the :id is dynamic
router.delete('/topics/:id', topics.deleteTopic);
router.put('/topics/:id/up', topics.voteUpTopic);
router.put('/topics/:id/down', topics.voteDownTopic);

module.exports = router;