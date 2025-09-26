// client.js
const net = require("net");

const SERVER_IP = "192.168.43.1"; // IP of hotspot laptop (check via ipconfig/ifconfig)
const SERVER_PORT = 5000;

const client = new net.Socket();

client.connect(SERVER_PORT, SERVER_IP, () => {
  console.log("Connected to server");
});

client.on("data", (data) => {
  console.log("Message from server:", data.toString());
});

client.on("close", () => {
  console.log("Connection closed");
});
