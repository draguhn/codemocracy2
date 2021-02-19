const Topic = require('../models/topic.models');
// fin(), create(), findByIdAndDelete() are mongoose Methods

//GET ALL TOPICS
exports.getTopic = async (req, res) => {
  try {
    const topics = await Topic.find();
    res.send(topics)
  } catch (error) {
    console.log('GET TOPIC ERROR', error)
    res.status(500);
    res.send(error)
  }
};

//POST NEW TOPIC
exports.postTopic = async (req, res) => {
  try {
    const { title } = req.body;
    const topic = await Topic.create({ title })
    res.status(201)
    res.send(topic)
  } catch (error) {
    console.log('POST TOPIC ERROR', error)
    res.status(500);
    res.send(error)
  }
}

//DELETE TOPIC
exports.deleteTopic = async (req, res) => {
  try {
    // paramsObject is in the URL
    const { id } = req.params;
    // 
    await Topic.findByIdAndDelete(id)
    res.sendStatus(204)
  } catch (error) {
    console.log('DELETE TOPIC ERROR', error)
    res.status(500);
    res.send(error)
  }
}

//VOTE UP OR DOWN TOPIC
exports.voteUpTopic = async(req, res) => voteTopic(req, res, 1);

exports.voteDownTopic = async(req, res) => voteTopic(req, res, -1);

const voteTopic = async (req, res, direction) => {
  try {
    const { id } = req.params;
    const topic = await Topic.findByIdAndUpdate(id,
      { $inc: { score: direction } },
      { new: true }
    );
    res.send(topic)
  } catch (error) {
    console.log('UPDATE TOPIC ERROR', error)
    res.status(500);
    res.send(error)
  }
}

