const http = require("http");

const PORT = 3000;

const handler = (request, response) => {};

http.createServer(handler).listen(PORT, function () {
  console.log("server running at", PORT);
});
