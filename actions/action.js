const fs = require("fs");
class Action {

    constructor() { }

    static responseBuilder(statusCode, ack, object) {
        ack.writeHead(statusCode, { "content-type": "application/json" });
        ack.write(JSON.stringify(object));
        ack.end();
    }

    static ok(object, ack) {
        return this.responseBuilder(200, ack, object);
    }

    static notFound(object, ack) {
        return this.responseBuilder(404, ack, object);
    }

    static unAuthorized(object, ack) {
        return this.responseBuilder(401, ack, object);
    }

    static created(object, ack) {
        return this.responseBuilder(201, ack, object);
    }

    static accepted(object, ack) {
        return this.responseBuilder(202, ack, object);
    }
    static unsupport(object, ack) {
        return this.responseBuilder(422, ack, object);
    }

    static statusCode(statusCode, ack, object) {
        return this.responseBuilder(statusCode, ack, object);
    }

    static view(htmlRef, ack) {
        ack.writeHead(200, { "content-type": "text/html; charset=UTF-8" });
        fs.readFile(htmlRef, (err, data) => {
            if (err) throw err;
            ack.write(data);
            ack.end();
        });

    }


}

module.exports = Action;