const HomeController = require("./controllers/homeController");
const Routes = {
    "/": (req, res) => HomeController.index(req, res),
    "/users": (req, res) => HomeController.users(req, res),
    "/products": (req, res) => HomeController.products(req, res),
    "/404": (req, res) => res.end("Sorry page you are looking not found")
}

module.exports = Routes;