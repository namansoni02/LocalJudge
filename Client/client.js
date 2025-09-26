// Client/client.js
const { io } = require("socket.io-client");

const SERVER_IP = "192.168.43.1"; // replace with hotspot laptop IP
const socket = io(`http://${SERVER_IP}:5000`);

socket.on("connect", () => {
  console.log("Connected to server:", socket.id);

  // Send a message to the server
  socket.emit("message", "Hello from connected laptop!");
});

socket.on("message", (msg) => {
  console.log("Message from server:", msg);
});

socket.on("disconnect", () => {
  console.log("Disconnected from server");
});
