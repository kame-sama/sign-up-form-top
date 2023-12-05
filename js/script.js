const pwd = document.querySelector('#pwd');
const confirmPwd = document.querySelector('#confirm-pwd');
const submit = document.querySelector('#submit');
const label = document.querySelector('label[for="pwd"]');

pwd.addEventListener('input', matchPasswords);
confirmPwd.addEventListener('input', matchPasswords);

function matchPasswords() {
  if (pwd.value !== confirmPwd.value) {
    label.setAttribute('data-after', '* password do not match');
    submit.addEventListener('click', preventDefault);
  } else {
    label.setAttribute('data-after', '');
    submit.removeEventListener('click', preventDefault);
  }
}

function preventDefault(e) {
  e.preventDefault();
}