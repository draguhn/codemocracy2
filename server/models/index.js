const mongoose = require('mongoose');

// name of new created db is set to topic_db
module.exports = mongoose.connect('mongodb://localhost:27017/topic_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
}).then()

// do i need then()?