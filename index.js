const http = require("http");
const PORT = process.env.PORT || 9000;


const server = http.createServer((request, response) => {
    response.write(`server working on port ${PORT} `);
    response.end();
});

server.listen(PORT);

