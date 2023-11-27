function inputs() {
  const sectionInputs = document.querySelector('.inputs');
  const btn = document.querySelector('.payment_tablet__btn');

  const inputs = document.querySelectorAll('.input');

  const name = document.querySelector('#name');
  const surname = document.querySelector('#surname');
  const email = document.querySelector('#email');
  const phone = document.querySelector('#phone');
  const inn = document.querySelector('#inn');

  const errorName = document.querySelector('#errorName');
  const errorSurname = document.querySelector('#errorSurname');
  const errorEmail = document.querySelector('#errorEmail');
  const errorPhone = document.querySelector('#errorPhone');
  const errorInn = document.querySelector('#errorInn');


  // скролл до инпутов
  btn.addEventListener('click', () => {
    sectionInputs.scrollIntoView({
        behavior: 'smooth'
    });
  })
  

  // скрытие и показ лейбла
  inputs.forEach(input => {
    const label = input.previousElementSibling;

    input.addEventListener('input', () => {
      const isInputEmpty = input.value.trim() === '';
      label.classList.toggle('label_active', !isInputEmpty);
    });
  });



  // имя
  let isValidName = true;
  function validateName() {
    isValidName = name.value.trim() === '' || !/[^A-Za-zА-Яа-я]/.test(name.value);
    errorName.style.visibility = isValidName ? 'hidden' : 'visible';
    name.style.color = isValidName ? 'var(--text-black, #000)' : 'var(--system-orange, #F55123)';
    name.style.borderBottom = isValidName ? '1px solid rgba(0,0,0,0.20)' : '1px solid #F55123';
  }
  name.addEventListener('blur', validateName);
  name.addEventListener('focus', function () {
    errorName.style.visibility = 'hidden';
  });


  // фамилия
  let isValidSurname = true;
  function validateSurname() {
    isValidSurname = surname.value.trim() === '' || !/[^A-Za-zА-Яа-я]/.test(surname.value);
    errorSurname.style.visibility = isValidSurname ? 'hidden' : 'visible';
    surname.style.color = isValidSurname ? 'var(--text-black, #000)' : 'var(--system-orange, #F55123)';
    surname.style.borderBottom = isValidSurname ? '1px solid rgba(0,0,0,0.20)' : '1px solid #F55123';
  }
  surname.addEventListener('blur', validateSurname);
  surname.addEventListener('focus', function () {
    errorSurname.style.visibility = 'hidden';
  });


  // почта
  let isValidEmail = true;
  function validateEmail() {
    isValidEmail = email.value.trim() === '' || /[@]/ && /[gmail.com]/.test(email.value);
    errorEmail.style.visibility = isValidEmail ? 'hidden' : 'visible';
    email.style.color = isValidEmail ? 'var(--text-black, #000)' : 'var(--system-orange, #F55123)';
    email.style.borderBottom = isValidEmail ? '1px solid rgba(0,0,0,0.20)' : '1px solid #F55123';
  }
  email.addEventListener('blur', validateEmail);
  email.addEventListener('focus', function () {
    errorEmail.style.visibility = 'hidden';
  });


    // телефон
  let isValidPhone = true;
  function validatePhone() {
    isValidPhone = phone.value.trim() === '' || phone.value.length >= 16;
    errorPhone.style.visibility = isValidPhone ? 'hidden' : 'visible';
    phone.style.color = isValidPhone ? 'var(--text-black, #000)' : 'var(--system-orange, #F55123)';
    phone.style.borderBottom = isValidPhone ? '1px solid rgba(0,0,0,0.20)' : '1px solid #F55123';
  }
  phone.addEventListener('blur', validatePhone);
  phone.addEventListener('focus', function () {
    errorPhone.style.visibility = 'hidden';
  });


  // маска для телефона
  phone.addEventListener('input', () => {
    let inputValue = phone.value.replace(/\D/g, '');
  
    if (inputValue.length > 0) {
      inputValue = '+' + inputValue.slice(0, 1) + ' ' + inputValue.slice(1, 4) + ' ' +
        inputValue.slice(4, 7) + ' ' + inputValue.slice(7, 9) + ' ' + inputValue.slice(9, 11);
    }
    phone.value = inputValue;
  });
  
  phone.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace' && phone.selectionStart === phone.selectionEnd) {
      const cursorPosition = phone.selectionStart;
      phone.value = (cursorPosition > 0 && phone.value[cursorPosition - 1] === ' ') ?
        phone.value.slice(0, cursorPosition - 1) + phone.value.slice(cursorPosition) :
        phone.value.slice(0, cursorPosition - 1) + phone.value.slice(cursorPosition);
      event.preventDefault();
    }
  });


    // инн
  let isValidInn = true;
  function validateInn() {
    isValidInn = inn.value.trim() === '' || inn.value.length >= 14;
    errorInn.style.visibility = isValidInn ? 'hidden' : 'visible';
    errorInn.textContent = isValidInn ? 'Для таможенного оформления' : 'Проверьте ИНН';
    errorInn.style.color = isValidInn ? 'var(--text-black, #000)' : 'var(--system-orange, #F55123)';

    inn.style.color = isValidInn ? 'var(--text-black, #000)' : 'var(--system-orange, #F55123)';
    inn.style.borderBottom = isValidInn ? '1px solid rgba(0,0,0,0.20)' : '1px solid #F55123';
  }
  inn.addEventListener('blur', validateInn);
  inn.addEventListener('focus', function () {
    errorInn.style.visibility = 'hidden';
  });
  inn.addEventListener("input", () => {
    inn.value = inn.value.slice(0, 14);
  });
}

export default inputs;