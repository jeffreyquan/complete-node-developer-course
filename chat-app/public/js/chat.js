const socket = io();

socket.on("message", (message) => {
  console.log(message);
});

document.querySelector("#message-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const message = event.target.elements.message.value;
  socket.emit("sendMessage", message);
});

// socket.on("countUpdated", (count) => {
//   console.log("Count updated" + count);
// });

// document.querySelector("#increment").addEventListener("click", () => {
//   socket.emit("increment");
// });
