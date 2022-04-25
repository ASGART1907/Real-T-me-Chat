const express = require("express");
const socket = require("socket.io");
const PORT = 3000;

const app = express();

app.use(express.static("public"));

const server = app.listen(PORT,() => {
  console.log("SERVER SUCCESS");
});

const io = socket(server);

io.on("connection",socket => {
  socket.on("data",data => {
    io.sockets.emit("data",data);    
  });

  socket.on("sender",data => {
    socket.broadcast.emit("sender",data);
  })
})

