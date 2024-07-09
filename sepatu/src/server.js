const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let shoes = [];

app.get('/shoes', (req, res) => {
  res.json(shoes);
});

app.post('/shoes', (req, res) => {
  const shoe = req.body;
  shoes.push(shoe);
  res.status(201).json(shoe);
});

app.delete('/shoes/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < shoes.length) {
    shoes.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
