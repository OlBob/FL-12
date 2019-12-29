let stopInput = 'Canceled',
  mEmLength = 5,
  mPassLength = 6,
  password,
  changePass,
  tempPass,
  successChange = 'You have successfully changed your password.',
  admin = {
    email: 'admin@gmail.com',
    password: 'AdminPass'
  },
  user = {
    email: 'user@gmail.com',
    password: 'UserPass'
  };

let email = prompt('Input Email');
if (!email) {
  alert(stopInput);
} else if (email.length < mEmLength) {
  alert("I don't know any emails having name length less than 5 symbols");
} else {
  password = prompt('Input password');
  if (!password) {
    alert(stopInput);
  } else if (password !== admin.password && password !== user.password) {
    alert('Wrong password');
  } else {
    changePass = confirm('Do you want to change your password?');
    if (!changePass) {
      alert('You have failed the change.');
    } else {
      password = prompt('Input old password');
      if (!password) {
        alert(stopInput);
      } else if (email === admin.email && password !== admin.password ||
        email === user.email && password !== user.password) {
        alert('Wrong password');
      } else {
        password = prompt('Input new Password');
        if (!password) {
          alert(stopInput);
        } else if (password.length < mPassLength) {
          alert('It’s too short password. Sorry.');
        } else {
          tempPass = prompt('Confirm your new Password');
          if (tempPass !== password) {
            alert('You wrote the wrong password.');
          } else {
            if (email === admin.email) {
              admin.password = password;
              alert(successChange);
            } else {
              user.password = password;
              alert(successChange);
            }
          }
        }
      }
    }
  }
}
