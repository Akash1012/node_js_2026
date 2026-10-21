const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/plain" });
      return res.end("Hello, World !\n");
    case "/contact-us":
      res.writeHead(200, { "Content-Type": "text/plain" });
      return res.end("Contact Us Page\n");
    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found\n");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
