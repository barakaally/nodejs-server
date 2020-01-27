
const BuildServer = require("./build-server");
class Server {

    constructor(port = 9000) {
        this.port = port;
    }

    build() {
        return new BuildServer(this.port);
    }


}

module.exports = Server;