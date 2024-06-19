const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer((req, res) => {
    const query = url.parse(req.url, true);
    let filename = `.${query.pathname}`;

    if (req.url === "/") {
      filename = "./home.html";
    }

    fs.readFile(`./html/${filename}`, (err, data) => {
      if (err) {
        fs.readFile("./html/contacto.html", (err, data) => {
          if (err) {
            console.error(err);
            res.writeHead(500, { "Content-Type": "text/html" });
            return res.end("Error reading conctacto.html");
          }
          res.writeHead(404, { "Content-Type": "text/html" });
          return res.end(data);
        });
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        if (data) res.write(data);
        return res.end();
      }
    });
  })
  .listen(8080);
