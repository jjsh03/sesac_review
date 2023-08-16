const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('/views', 'views');

app.use(express.urlencoded({ extended: true }));
app.unsubscribe(express.json());

app.get('/', (req, res) => {
  console.log(req.query);
  res.render('pr-index', { title: '폼 정보 입력' });
});

app.post('/formResult', (req, res) => {
  console.log(req.body);
  res.render('pr-result', { title: 'Post 요청', userInfo: req.body });
});

app.listen(PORT, () => {
  console.log(`${PORT} is open!`);
});
