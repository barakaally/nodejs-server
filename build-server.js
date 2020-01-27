const http = require("http");
const routes = require("./routes");
class BuildServer {
    constructor(port) {
        this.port = port;
        this.server = http.createServer((req, resp) => {
            (req.url in routes) ? routes[req.url](req, resp) : routes["/404"](req, resp);
        });

    }

    start() {
        this.server.listen(this.port);
        console.log(`server started on port ${this.port}`);
    }
}

module.exports = BuildServer;