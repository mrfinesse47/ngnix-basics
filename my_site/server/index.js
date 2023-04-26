const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('i am an endpoint');
});

app.listen(7777, () => {
  console.log('server is running on port 7777');
});
