module.exports = app => {
    const usuarios = require("../controllers/usuario.controller.js");
  
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", usuarios.create);
  

    router.get("/", usuarios.findAll);//as

    router.put("/:id", usuarios.update);
  

    router.delete("/:id", usuarios.delete);
  
    // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
  
    app.use('/api/usuarios', router);
  };