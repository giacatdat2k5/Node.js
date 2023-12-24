const express = require('express');
var bodyParser = require('body-parser')

const app = express();
const port = 3000;

const API_V1 = require('./routes/v1/index');
app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/index',API_V1);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});