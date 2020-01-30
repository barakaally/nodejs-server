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

    static loadAsset(filePath, ack) {
        ack.writeHead(200, { "content-type": "image/png;" });
        fs.readFile(`./${filePath}`, (err, data) => {
            if (err) {
                return this.notFound({ "error": { code: "404", file: filePath } }, ack);
            }
            ack.write(data);
            ack.end();
        });

    }


}

module.exports = Action;