function sendMessage() {

  const input = document.getElementById("userInput");

  if(!input) return;

  const message = input.value;

  if(message.trim() === "") return;

  const messages = document.getElementById("messages");

  messages.innerHTML += `
    <div class="user-message">
      ${message}
    </div>
  `;

  messages.innerHTML += `
    <div class="ai-message">
      AI integration coming next...
    </div>
  `;

  input.value = "";
}
