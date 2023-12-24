const express = require('express');
const app = express();
const port = 3000;

const userRoutes = require('./routes/v1/userRoutes')
const API_v1 = require('./routes/v1')
app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.use('/v1',API_v1);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});