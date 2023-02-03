module.exports = app => {
    const admins = require("../controllers/admin.controller.js");
  
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", admins.create);
  
    // Retrieve all Tutorials
    router.get("/", admins.findAll);
  
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    //router.get("/:id", students.findOne);

    //router.get("/:id", students.findByEmail);
  
    // Update a Tutorial with id
    router.put("/:id", admins.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", admins.delete);
  
    // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
  
    app.use('/api/admins', router);
  };