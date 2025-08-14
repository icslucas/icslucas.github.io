// Custom Cursor
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});

// Add hover effect to interactive elements
const interactiveElements = document.querySelectorAll('a, button');
interactiveElements.forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

// Countdown Timer
function startCountdown() {
  let hours = 23;
  let minutes = 59;
  let seconds = 59;

  const timerInterval = setInterval(() => {
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }
    if (minutes < 0) {
      minutes = 59;
      hours--;
    }
    if (hours < 0) {
      clearInterval(timerInterval);
      hours = 0;
      minutes = 0;
      seconds = 0;
    }

    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
  }, 1000);
}

// Payment Modal Handling
const paymentModal = document.getElementById('paymentModal');
const cryptoMessageModal = document.getElementById('cryptoMessageModal');
const closeModals = document.querySelectorAll('.close-modal');

closeModals.forEach(close => {
  close.addEventListener('click', () => {
    paymentModal.style.display = 'none';
    cryptoMessageModal.style.display = 'none';
  });
});

window.addEventListener('click', (event) => {
  if (event.target === paymentModal) {
    paymentModal.style.display = 'none';
  }
  if (event.target === cryptoMessageModal) {
    cryptoMessageModal.style.display = 'none';
  }
});

const payButtons = document.querySelectorAll('.cta-button');
let selectedPlan = '';

payButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    selectedPlan = btn.dataset.plan;
    paymentModal.style.display = 'block';
  });
});

document.getElementById('payCard').addEventListener('click', () => {
  let whopLink = '';
  if (selectedPlan === 'basic') {
    whopLink = 'https://whop.com/checkout/your-basic-plan-link'; // Replace with actual Whop link for basic
  } else if (selectedPlan === 'pro') {
    whopLink = 'https://whop.com/checkout/your-pro-plan-link'; // Replace with actual Whop link for pro
  } else if (selectedPlan === 'elite') {
    whopLink = 'https://whop.com/checkout/your-elite-plan-link'; // Replace with actual Whop link for elite
  }
  window.location.href = whopLink;
});

document.getElementById('payCrypto').addEventListener('click', () => {
  paymentModal.style.display = 'none';
  cryptoMessageModal.style.display = 'block';
});

// Start countdown on load
window.onload = startCountdown;
