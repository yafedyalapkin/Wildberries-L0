function goods() {

    const mainCheck = document.querySelector('#all');
    const checkboxes = document.querySelectorAll('.check-input:not(#money_tablet)');
    const likeBtns = document.querySelectorAll('.card__icons-like');
    const deleteBtns = document.querySelectorAll('.card__icons-delete');
    const amountTotal = document.querySelector('.payment__title');


    let total = '2 101 063';
    amountTotal.textContent = total;


    function toggleCheckboxes() {
        let isChecked = mainCheck.checked;
        checkboxes.forEach((check) => {
            check.checked = isChecked;
        });
    }
    mainCheck.addEventListener('change', toggleCheckboxes);

    // лайки
    likeBtns.forEach((like) => {
        like.addEventListener('click', () => {
            like.classList.toggle('card__icons-like_purple');
        });
    });

    // корзины
    deleteBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.card').remove();
        });
    });
}

export default goods;


