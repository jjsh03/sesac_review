exports.main = (req, res) => {
  res.render('index');
};

exports.login = (req, res) => {
  res.send(req.body);
};
