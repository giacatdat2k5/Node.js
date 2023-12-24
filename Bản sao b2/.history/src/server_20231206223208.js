const express = require('express');
const app = express();
const port = 3000;

const userRoutest = require('./routes/v1/index')
const API_V1 =require('./routes/v1')

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.use('/user',userRoutest);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});