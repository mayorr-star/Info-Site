const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    const pathName = req.url;
    let fileName = null;
    let status = 200;
    switch (pathName) {
      case "/":
        fileName = "index.html";
        break;
      case "/contact-me":
        fileName = "contact-me.html";
        break;
      case "/about":
        fileName = "about.html";
        break;
      default:
        fileName = "404.html";
    }
    fs.readFile(fileName, "utf-8", (err, content) => {
      if (err) {
        console.log(err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Server Error");
      } else {
        res.writeHead(status, { "Content-Type": "text/html" });
        res.write(content);
        res.end();
      }
    });
  })
  .listen(8080);
