// Cursor lightning effect
document.addEventListener("mousemove", e => {
  const lightning = document.createElement("div");
  lightning.className = "lightning";
  lightning.style.left = e.clientX + "px";
  lightning.style.top = e.clientY + "px";
  document.body.appendChild(lightning);

  setTimeout(() => lightning.remove(), 300);
});

function buyTier(tier) {
  const payMethod = prompt(`You selected ${tier}. Pay with CRYPTO or CARD?`).toLowerCase();
  if(payMethod === "card") {
    window.location.href = "https://whop.com"; 
  } else {
    alert("Join our Discord server and create a ticket to pay: https://discord.gg/YOUR_SERVER");
  }
}

// Lightning cursor style
const style = document.createElement('style');
style.innerHTML = `
.lightning {
  position: absolute;
  width: 5px;
  height: 20px;
  background: #00bfff;
  pointer-events: none;
  border-radius: 50%;
  box-shadow: 0 0 15px #00bfff, 0 0 30px #00bfff;
  animation: fade 0.3s forwards;
}
@keyframes fade {
  0% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(0.5); }
}`;
document.head.appendChild(style);
