const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/register', (req, res) => {
  console.log('req.query');
  res.render('req.query');
});

app.listen(PORT, function () {
  console.log(`Port ${PORT} is opening!`);
});
