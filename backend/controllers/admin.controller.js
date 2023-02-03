const db = require("../models");
const Auth= require("../tools/auth")
const Admin = db.admin;
const secret="test";

exports.create = (req, res) => {
    const admin= new Admin({
        name: req.body.name,
        email: req.body.email,
        telephone: req.body.telephone,
        pass: req.body.pass
    });

    // Save Tutorial in the database
    admin
        .save(admin)
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
    console.log(req.query)
  const email = req.query.email;
  const pass=req.query.pass;
  var condition = { email: email,pass:pass} ;
  
  Admin.find(condition)
    .then(data => {
  
      if (data.length==1) {
        let accessToken=Auth.generateAccessToken(condition,secret);

        res.header('authorization',accessToken).json({
            message:"Usuario autenticado",
            token: accessToken
        });
        //res.send(data);
        //Auth.validateToken(accessToken,res,secret);
      }
      else{
        res.send(null);
      }
      


      // res.header('authorization',accessToken).json({
      //   message:"Usuario autenticado",
      //   token: accessToken
      // });
      
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });

};

// // Find a single Tutorial with an id
// exports.findOne = (req, res) => {

// };

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      const id = req.params.id;
    
      Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

    Admin.findByIdAndRemove(id)
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