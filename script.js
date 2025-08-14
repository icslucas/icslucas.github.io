// Scroll to pricing
function scrollToPricing() {
  document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
}

// Buy prompt
function buyPlan(plan) {
  let method = prompt(`You selected ${plan} tier.\nPay with Crypto or Card? (type 'crypto' or 'card')`);
  if(!method) return;
  method = method.toLowerCase();
  if(method === 'crypto') {
    alert('Pay with crypto through our Discord! Join server and open a ticket.');
    window.open('https://discord.gg/YOURSERVER', '_blank');
  } else if(method === 'card') {
    window.location.href = 'https://whop.com/product/YOURPRODUCTID';
  } else {
    alert('Invalid option.');
  }
}

// Cursor follow effect
document.addEventListener('mousemove', e => {
  let cursor = document.querySelector('body::after'); // pseudo, we can't select directly
  document.body.style.setProperty('--cursorX', e.clientX + 'px');
  document.body.style.setProperty('--cursorY', e.clientY + 'px');
});
