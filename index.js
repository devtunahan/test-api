const express = require('express')
const app = express()
require('dotenv').config();


app.get('/test-api', (req, res) => {
  res.send('Hello World!')
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
