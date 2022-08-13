const http = require("http");

const PORT = 3000;

const DEFAULT_HEADER = { "Content-Type": "application/json" };

const routes = {
  "/heroes:get": async (request, response) => {
    const { id } = request.queryString;
    console.log({ id });
    response.end();
  },

  default: (request, response) => {
    response.write("Hello!");
    response.end();
  },
};

const handler = (request, response) => {
  const { url, method } = request;

  const [, route, id] = url.split("/");

  request.queryString = { id: isNaN(id) ? id : Number(id) };

  const key = `/${route}:${method.toLowerCase()}`;

  response.writeHead(200, DEFAULT_HEADER);

  const chosen = routes[key] || routes.default;
  return chosen(request, response);
};

http.createServer(handler).listen(PORT, function () {
  console.log("server running at", PORT);
});
