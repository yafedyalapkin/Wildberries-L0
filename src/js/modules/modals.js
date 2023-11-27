function modals() {
  const overlayModalCard = document.querySelector('.overlay-card'); // затемнение 1
  const modalCard = document.querySelector('#card'); // получаю модальное окно
  const btnsCard = document.querySelectorAll('.trigger-modal-card'); // кнопка-триггер
  const closeModalCard = document.querySelector('.modal__close-card'); // элемент который будет закрывать окно
  const btnSaveCard = document.querySelector('#save-card'); 
  const numbers = document.querySelectorAll('#number-card');  // номер карты на странице


  const radioBtns = document.querySelectorAll('.radio-input'); // радио кнопки


  const overlayModalAddress = document.querySelector('.overlay-address'); // затемнение 2
  const modalAddress = document.querySelector('#address'); // получаю модальное окно
  const btnsAddress = document.querySelectorAll('.trigger-modal-address'); // кнопка-триггер
  const closeModalAddress = document.querySelector('.modal__close-address'); // элемент который будет закрывать окно
  const btnSaveAddress = document.querySelector('#save-address'); 
  const address = document.querySelectorAll('#location');  // 

  const btnPickUpPoints = document.querySelector('#firstBtn'); // кнопка пункт выдачи
  const btnHouse = document.querySelector('#secondBtn'); // кнопка курьер
  const pickUpPoints = document.querySelector('.modal-address__pick-up-points'); 
  const house = document.querySelector('.modal-address__house'); 
  const deleteAddress = document.querySelectorAll('.modal-address__delete'); // корзина


  btnsAddress.forEach(btn => { 
    btn.addEventListener('click', () => {
      openModal(modalAddress, overlayModalAddress);
    });
  });

  btnsCard.forEach(btn => { 
    btn.addEventListener('click', () => {
      openModal(modalCard, overlayModalCard);
    });
  });



  function openModal(modal, overlay) { // 8. вынесу в отдельную функцию и открытие окна
    modal.classList.add('show');
    overlay.classList.remove('hide');
    document.body.style.overflow = 'hidden'; // запрещаю прокрутку страницы
  };

  function closeModal(modal, overlay) { // 7. вынесу в отдельную функцию повторяющиеся действия (закрытие окна)
    overlay.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = ''; // разрешаю прокрутку страницы
  };

  



  overlayModalCard.addEventListener('click', (e) => { // 5.
    if (e.target === overlayModalCard) { // если элемент, на который кликнули - это именно подложка под окно
      closeModal(modalCard, overlayModalCard); // выполняется функ
    };
  });

  overlayModalAddress.addEventListener('click', (e) => { // 5.
    if (e.target === overlayModalAddress) { // если элемент, на который кликнули - это именно подложка под окно
      closeModal(modalAddress, overlayModalAddress); // выполняется функ
    };
  });




  let numberCard;
  radioBtns.forEach(btn => {
    btn.addEventListener('change', (event) => {
      let label = event.target.closest('.radio__card');
      let radioText = label.querySelector('.radio-text');
      numberCard = radioText.textContent;
    });
  });
  btnSaveCard.addEventListener('click', () => { // закрываю модалку при нажатии на кнопку выбрать
    numbers.forEach(num => {
      num.textContent = numberCard;
    });
    closeModal(modalCard, overlayModalCard); // и закрываем модалку
  });


  let saveAddress;
  radioBtns.forEach(btn => {
    btn.addEventListener('change', (event) => {
      let label = event.target.closest('.radio__card');
      let radioText = label.querySelector('.radio-text');
      saveAddress = radioText.textContent;
    });
  });
  btnSaveAddress.addEventListener('click', () => { // закрываю модалку при нажатии на кнопку выбрать
    address.forEach(item => {
      item.textContent = saveAddress;
    })
    closeModal(modalAddress, overlayModalAddress); // и закрываем модалку
  });


 



  closeModalCard.addEventListener('click', (e) => { // 4. при клике на крестик - выполняется функ
    if (e.target === closeModalCard) { // если элемент, на который кликнули - это именно подложка под окно
      closeModal(modalCard, overlayModalCard);
    };
  }); 

  closeModalAddress.addEventListener('click', (e) => { // 4. при клике на крестик - выполняется функ
    if (e.target === closeModalAddress) { // если элемент, на который кликнули - это именно подложка под окно
      closeModal(modalAddress, overlayModalAddress);
    };
  }); 







  // меняю адреса при клике на пункты выдачи и курьером
  btnPickUpPoints.addEventListener('click', () => {
    btnPickUpPoints.classList.add('modal-address__btn_active');
    btnHouse.classList.remove('modal-address__btn_active');

    pickUpPoints.classList.add('modal-address__pick-up-points_active')
    house.classList.remove('modal-address__house_active')
  })

  btnHouse.addEventListener('click', () => {
    btnHouse.classList.add('modal-address__btn_active');
    btnPickUpPoints.classList.remove('modal-address__btn_active');

    house.classList.add('modal-address__house_active')
    pickUpPoints.classList.remove('modal-address__pick-up-points_active')
  })

  // удаление адреса 
  deleteAddress.forEach(btn => {
    btn.addEventListener('click', () => {
      const label = btn.closest('label');
      label.style.display = 'none';
    })
  })




}


export default modals;
