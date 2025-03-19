
const addToCartButton = document.getElementById('add-to-cart');
const cartCount = document.getElementById('cart-count');
const confirmationMessage = document.getElementById('confirmation');
document.getElementById('copyright-year').innerText = new Date().getFullYear();


addToCartButton.addEventListener('click', function() {

  let currentCount = parseInt(cartCount.innerText);
  currentCount++;
  cartCount.innerText = currentCount;

  confirmationMessage.innerText = 'Added to cart!';
  confirmationMessage.style.display = 'block';

  setTimeout(function() {
    confirmationMessage.style.display = 'none';
  }, 3000);
  
});
