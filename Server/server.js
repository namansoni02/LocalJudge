// server.js
const net = require("net");

const HOST = "0.0.0.0"; // Bind to all network interfaces
const PORT = 5000;

const server = net.createServer((socket) => {
  console.log("Client connected:", socket.remoteAddress);

  // Send a message to client
  socket.write("Hello from server (Hotspot laptop)!\n");

  // Receive data from client
  socket.on("data", (data) => {
    console.log("Received from client:", data.toString());
  });

  socket.on("close", () => {
    console.log("Client disconnected");
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Server running on ${HOST}:${PORT}`);
});
