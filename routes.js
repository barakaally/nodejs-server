const Controller = require("./controllers/controller");
const Routes = {
    GET: (req, res) => Controller.get(req, res),
    POST: (req, res) => Controller.post(req, res),
    PUT: (req, res) => Controller.put(req, res),
    DELETE: (req, res) => Controller.delete(req, res),
    "/error": (req, res) => Controller.unsupported(req, res),
}

module.exports = Routes;