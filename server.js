const http = require("http");

const xmlData = `<?xml version="1.0" encoding="utf8" ?><user login="root" pass=""><name>Mark</name><sname>Avdeev</sname></user>`;

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Дозволяємо доступ з любих доменів
  res.writeHead(200, { "Content-Type": "application/xml" });
  res.end(xmlData);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
