const app = require('express')();
const port = process.env.PORT || 3000;
const cors = require('cors');
const utils = require('./controllers/index.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors())

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
