const http = require("http");
class BuildServer {
    constructor(port) {
        this.port = port;
        this.server = http.createServer((request, response) => {
            response.write(`server working on port ${this.port} `);
            response.end();
        });

    }

    start() {
        this.server.listen(this.port);
    }
}

module.exports = BuildServer;