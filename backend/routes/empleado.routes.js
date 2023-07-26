module.exports = app => {
    const empleados = require("../controllers/empleado.controller.js");
  
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", empleados.create);
  
    // Retrieve all Tutorials
    router.get("/", empleados.findAll);
  
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    //router.get("/:id", usuarios.findOne);

    //router.get("/:id", usuarios.findByEmail);
  
    // Update a Tutorial with id
    router.put("/:id", empleados.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", empleados.delete);
  
    // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
  
    app.use('/api/empleados', router);
  };