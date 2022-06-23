const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json({
    name: "hola",
  });
});

app.listen(process.env.PORT || 3100, () => {
  console.log(
    `Servidor est{a escuchando en el puerto ${process.env.PORT || 3100}`
  );
});
