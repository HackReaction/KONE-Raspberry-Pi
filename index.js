const app = require('express')();
const port = process.env.PORT || 4000;
const utils = require('./controllers/index.js');

app.use('/compare', utils.compare);

app.listen(port, (err) => {
  if (err) {
    console.log(`Error connecting to port ${port}:\n${err}`);
  } else {
    console.log(`Listening on port ${port}!`);
  }
});

