// Server/server.js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" } // Allow all clients
});

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  // Send welcome message
  socket.emit("message", "Hello from hotspot laptop!");

  // Listen for client messages
  socket.on("message", (msg) => {
    console.log("Client says:", msg);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

server.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});
