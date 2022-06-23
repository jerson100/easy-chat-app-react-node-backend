const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("login", (us) => {});
  socket.on("addComment", (comment) => {
    console.log(comment);
    socket.emit("newComment", comment);
  });
});

app.get("/", (req, res) => {
  return res.json({
    name: "hola",
  });
});

server.listen(process.env.PORT || 3100, () => {
  console.log(
    `Servidor est{a escuchando en el puerto ${process.env.PORT || 3100}`
  );
});
