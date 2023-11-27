import '../scss/style.scss';

import goods from './modules/goods';
import inputs from './modules/inputs';
import payment from './modules/payment';
import modals from './modules/modals';



document.addEventListener('DOMContentLoaded', () => {
	goods();
	inputs();
	payment();
	modals();
});