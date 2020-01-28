const http = require("http");
const routes = require("./routes");

class BuildServer {
    constructor(port) {
        this.port = port;
        this.server = http.createServer((req, resp) => {
            if (req.method in routes) {
                return routes[req.method](req, resp);
            } else {
                routes["/error"](req, resp);
            }

        });

    }

    start() {
        this.server.listen(this.port);
        console.log(`server started on port ${this.port}`);
    }
}

module.exports = BuildServer;