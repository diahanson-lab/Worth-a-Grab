// Welcome popup
window.onload = function() {
  setTimeout(() => {
    alert("Welcome to Worth a Grab! ☕\nCheck out our menu and place your order!");
  }, 800);
};

// Chatbox toggle
document.getElementById("chat-icon").onclick = function() {
  let chatbox = document.getElementById("chatbox");
  chatbox.style.display = (chatbox.style.display === "flex") ? "none" : "flex";
};

// Send message
function sendMessage() {
  let input = document.getElementById("user-input");
  let msg = input.value.trim();
  if (msg === "") return;

  let chatMessages = document.getElementById("chatbox-messages");
  chatMessages.innerHTML += `<p><strong>You:</strong> ${msg}</p>`;

  // Bot replies
  let reply = "I'm here to help with your coffee order!";
  if (msg.toLowerCase().includes("espresso")) reply = "Great choice! Espresso gives a strong kick ☕";
  if (msg.toLowerCase().includes("latte")) reply = "Latte is smooth and comforting!";
  if (msg.toLowerCase().includes("mocha")) reply = "Mocha = coffee + chocolate heaven 🍫☕";
  if (msg.toLowerCase().includes("menu")) reply = "Our menu has Espresso, Cappuccino, Latte, and Mocha!";
  if (msg.toLowerCase().includes("hi") || msg.toLowerCase().includes("hello")) reply = "Hello! How can I serve you today?";

  chatMessages.innerHTML += `<p><strong>Bot:</strong> ${reply}</p>`;
  chatMessages.scrollTop = chatMessages.scrollHeight;
  input.value = "";
}

// Save order form data to localStorage
document.addEventListener("DOMContentLoaded", () => {
  const orderForm = document.getElementById("orderForm");
  if (orderForm) {
    orderForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const formData = new FormData(orderForm);
      let order = {};
      formData.forEach((value, key) => order[key] = value);
      localStorage.setItem("lastOrder", JSON.stringify(order));
      alert("Your order has been placed successfully!");
      orderForm.reset();
    });
  }
});
