const app = require("./app");
const http = require("http").createServer(app);
const port = 3000;


//Socket Logic
const socketIo = require("socket.io")(http);

socketIo.on("connection", (userSocket) => {
  userSocket.on("send_message", (data) => {
    userSocket.broadcast.emit("receive_message", data);
  });
});
http.listen(port);
