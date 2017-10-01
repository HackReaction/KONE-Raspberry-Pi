const app = require('express')();
const port = process.env.PORT || 3000;

const utils = require('./controllers/index.js');

app.use('/staticFigures', utils.staticFigures);

app.use('/chair', utils.stair);

app.use('/concrete', utils.concrete);

app.listen(port, (err) => {
  if (err) {
    console.log(`Error connecting to port ${port}:\n${err}`);
  } else {
    console.log(`Listening on port ${port}!`);
  }
});

