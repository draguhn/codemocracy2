const express = require('express');
const router = require('./router');
const cors = require('cors')
const connection = require('./models')

const app = express();

const PORT = 3001;

//use the body parser!!!
app.use(cors())
app.use(express.json())
app.use(router);

(async function () {
  try {
    await connection;
    console.log('db is connected'); //eslint-disable-line
    app.listen(PORT, () => {
      console.log(`Server is now listening to http://localhost:${PORT}`); //eslint-disable-line no-console
    })
  } catch (error) {
    console.log('Error', error); //eslint-disable-line no-console
  }
})()