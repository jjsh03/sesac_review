let idx = 0;
let today = new Date();

let submit = document.getElementById('submit');
submit.addEventListener('click', function () {
  let user = document.getElementById('username').value;
  let con = document.getElementById('content').value;

  const table = document.querySelector('table');
  const newTr = document.createElement('tr');
  const newIdx = document.createElement('td');
  const newUser = document.createElement('td');
  const newCon = document.createElement('td');
  const newDate = document.createElement('td');

  newIdx.innerHTML = ++idx;
  newUser.innerHTML = user;
  newCon.innerHTML = con;
  newDate.innerHTML = today.toLocaleTimeString();
  newTr.append(newIdx, newUser, newCon, newDate);
  table.appendChild(newTr);

  user.value = '';
  content.value = '';
});
