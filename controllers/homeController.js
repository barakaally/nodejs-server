class HomeController {
    constructor() {

    }

    static index(request, response) {
        response.write(`this is home page , availabe routes are /users and /products`);
        response.end();
    }

    static users(request, response) {
        response.write(`this is users page`);
        response.end();
    }

    static products(request, response) {
        response.write(`this product page`);
        response.end();
    }
}

module.exports = HomeController;