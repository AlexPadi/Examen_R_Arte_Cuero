const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.usuarios = require("./usuario.model.js")(mongoose);
db.empleado = require("./empleado.model.js")(mongoose);
db.catalogo = require("./catalogo.model.js")(mongoose);
db.formulario = require("./formulario.model.js")(mongoose);
db.comentarios = require("./comentarios.model.js")(mongoose);

module.exports = db;