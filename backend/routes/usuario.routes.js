module.exports = app => {
    const usuarios = require("../controllers/usuario.controller.js");
  
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", usuarios.create);
  
    // Retrieve all Tutorials
    router.get("/", usuarios.findAll);//as
  
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    //router.get("/:id", usuarios.findOne);

    //router.get("/:id", usuarios.findByEmail);
  
    // Update a Tutorial with id
    router.put("/:id", usuarios.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", usuarios.delete);
  
    // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
  
    app.use('/api/usuarios', router);
  };