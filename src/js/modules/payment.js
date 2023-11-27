function payment() {

  const checkbox = document.querySelector('#money');
  const descr = document.querySelector('#descr');
  const checkboxTablet = document.querySelector('#money_tablet');
  const descrTablet = document.querySelector('#descr_tablet');



  // скрытие элемента при нажатии на чекбокс
  checkbox.addEventListener('change', () => {
    descr.classList.toggle('payment__minus-money_descr-none');
  })

  checkboxTablet.addEventListener('change', () => {
    descrTablet.classList.toggle('payment__minus-money_descr-none');
  })
}
export default payment;
