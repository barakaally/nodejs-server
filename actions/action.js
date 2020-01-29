class Action {

    constructor() { }

    static response(statusCode, ack, object) {
        ack.writeHead(statusCode, { "content-type": "application/json" });
        ack.write(JSON.stringify(object));
        ack.end();
    }

    static ok(object, ack) {
        return this.response(200, ack, object);
    }

    static notFound(object, ack) {
        return this.response(404, ack, object);
    }

    static unAuthorized(object, ack) {
        return this.response(401, ack, object);
    }

    static created(object, ack) {
        return this.response(201, ack, object);
    }

    static accepted(object, ack) {
        return this.response(202, ack, object);
    }
    static unsupport(object, ack) {
        return this.response(422, ack, object);
    }

    static statusCode(statusCode, ack, object) {
        return this.response(statusCode, ack, object);
    }


}

module.exports = Action;