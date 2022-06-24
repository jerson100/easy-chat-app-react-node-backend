const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTED_URL || "*",
    methods: ["GET", "POST"],
  },
});
console.log(process.env.FRONTED_URL);
io.on("connection", (socket) => {
  socket.on("login", (us) => {
    console.log(`Usuario conectado: ${us}`);
  });
  socket.on("addComment", (comment) => {
    io.emit("newComment", comment);
  });
  socket.on("e", (user) => {
    console.log("---");
    console.log(`El usuario: ${user} se ha desconectado`);
    console.log("---");
  });
});

app.get("/", (req, res) => {
  return res.json({
    name: "tontito",
  });
});

server.listen(process.env.PORT || 3100, () => {
  console.log(
    `Servidor est{a escuchando en el puerto ${process.env.PORT || 3100}`
  );
});
