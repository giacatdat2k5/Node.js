const express = require('express');
const app = express();
const port = 3000;

const userRoutes = require('./routes/v1/userRoutes')

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.use('/user',userRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});