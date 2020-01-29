const Action = require("../actions/action");
class Controller {
    constructor() {

    }

    static get(request, response) {
        const object = {
            method: request.method,
            url: request.url,
            description: "Try request with other method[POST,PUT,DELETE,GET] or different url"
        }
        return Action.ok(object, response);
    }

    static post(request, response) {
        const object = {
            method: request.method,
            url: request.url,
            description: "Try request with other method[POST,PUT,DELETE,GET] or different url"
        }
        return Action.created(object, response);
    }

    static put(request, response) {
        const object = {
            method: request.method,
            url: request.url,
            description: "Try request with other method[POST,PUT,DELETE,GET] or different url"
        }
        return Action.accepted(object, response);
    }

    static delete(request, response) {
        const object = {
            method: request.method,
            url: request.url,
            description: "Try request with other method[POST,PUT,DELETE,GET] or different url"
        }
        return Action.accepted(object, response);
    }

    static unsupported(request, response) {
        const object = {
            method: request.method,
            url: request.url,
            description: "Try request with other method[POST,PUT,DELETE,GET] or different url"
        }
        return Action.unsupport(object, response);
    }
}

module.exports = Controller;