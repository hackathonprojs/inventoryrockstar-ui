const express = require('express')
const app = express()
const port = 8000;

//app.get('/', (req, res) => res.send('Hello World!'));``

app.use(express.static('public'));

// store a value (number of inventory)
// has a simple api to set that value.
// number of inventory
let inventoryAmount = 4;

app.get('/inventoryAmount', (req, res) => {
  // if newValue is provided, set the newvalue.
  if (req.query.newValue) {
    inventoryAmount = parseInt(req.query.newValue);
  }

  res.send(inventoryAmount.toString());
  res.end();
});

app.listen(port, () => console.log(`listening on port ${port}!`));