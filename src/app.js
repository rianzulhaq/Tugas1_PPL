import { 
  incrementQty, 
  decrementQty,
  recalculateSubtotal,
  diskon,
  limitQty
} from './helpers.js';

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const qtyInput = document.querySelector('#qty');
const price = document.querySelector('#price');
const subtotal = document.querySelector('#subtotal');
const OK = document.querySelector('#confirmButton');
const codeInput = document.querySelector('#code');

incrButton.addEventListener('click', () => {
  limitQty();
  qtyInput.value = incrementQty(qtyInput.value);
  subtotal.textContent = `Rp. ${recalculateSubtotal(price.value, qtyInput.value)}`;
});

decrButton.addEventListener('click', () => {
  limitQty();
  qtyInput.value = decrementQty(qtyInput.value);
  subtotal.textContent = `Rp. ${recalculateSubtotal(price.value, qtyInput.value)}`;
});

OK.addEventListener('click',() => {
  subtotal.textContent = `Rp. ${diskon(qtyInput.value,price.value,codeInput.value)}`;
});