const db = require("../models");
const Auth = require("../tools/auth")
const Usuario = db.usuarios;
const secret = "test";

// Create and Save a new Tutorial
exports.create = (req, res) => {


  // Create a usuario
  const usuario = new Usuario({
    name: req.body.name,
    email: req.body.email,
    pass: req.body.pass
  });

  // Save Tutorial in the database
  usuario
    .save(usuario)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// // Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const email = req.query.email;
  const pass = req.query.pass;
  var condition = { email: email, pass: pass };
  var type = "";

  if (condition.email == undefined && condition.pass == undefined) {
    type = "getAll";
    condition = {};
  }
  else {
    type = "getOne";
  }

  usuario.find(condition)
    .then(data => {
      if (type == "getAll") {
        res.send(data);
      }
      else if (type == "getOne" && data.length == 1) {
        let accessToken = Auth.generateAccessToken(condition, secret);

        res.header('authorization', accessToken).json({
          message: "Usuario autenticado",
          token: accessToken
        });

      }
      else {
        res.send(null);
      }


    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });

};



// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  usuario.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else res.send({ message: "Tutorial was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  usuario.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};

