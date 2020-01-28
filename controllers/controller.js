class Controller {
    constructor() {

    }

    static get(request, response) {
        response.write(`get request at path: ${request.url}`);
        response.end();
    }

    static post(request, response) {
        response.write(`post request at path: ${request.url}`);
        response.end();
    }

    static put(request, response) {
        response.write(`put request at path: ${request.url}`);
        response.end();
    }

    static delete(request, response) {
        response.write(`delete request at path: ${request.url}`);
        response.end();
    }

    static unsupported(request, response) {
        response.write(`error,unsupported request method: ${request.method}`);
        response.end();
    }
}

module.exports = Controller;