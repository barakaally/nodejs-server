const Action = require("../actions/action");
const url = require("url");
class Controller {
    constructor() {

    }

    static get(request, ack) {
        const object = {
            method: request.method,
            url: url.parse(request.url),
            description: "Try request with other method[POST,PUT,DELETE,GET] or different url"
        }

        if (request.url = "/") {
            return Action.view('./views/home.html', ack);
        }

        return Action.ok(object, ack);
    }

    static post(request, ack) {
        const object = {
            method: request.method,
            url: url.parse(request.url),
            description: "Try request with other method[POST,PUT,DELETE,GET] or different url"
        }
        return Action.created(object, ack);
    }

    static put(request, ack) {
        const object = {
            method: request.method,
            url: url.parse(request.url),
            description: "Try request with other method[POST,PUT,DELETE,GET] or different url"
        }
        return Action.accepted(object, ack);
    }

    static delete(request, ack) {
        const object = {
            method: request.method,
            url: url.parse(request.url),
            description: "Try request with other method[POST,PUT,DELETE,GET] or different url"
        }
        return Action.accepted(object, ack);
    }

    static unsupported(request, ack) {
        const object = {
            method: request.method,
            url: url.parse(request.url),
            description: "Try request with other method[POST,PUT,DELETE,GET] or different url"
        }
        return Action.unsupport(object, ack);
    }
}

module.exports = Controller;