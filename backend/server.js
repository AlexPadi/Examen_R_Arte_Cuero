const express = require("express");
const cors = require("cors");


const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
        origins: ['http://localhost:4200']
    }
});


app.use(express.urlencoded({extended:false}));

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models");

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

io.on('connection',(socket)=>{
  // socket.on('message', function (msg) {
  //   console.log(msg);  
  //   //io.send(msg);
  //   socket.broadcast.send(msg);
  // });

   //io.sockets.emit('broadcast',{ description: clients + ' clients connected!'});
   socket.on('message', function (msg) {
      io.sockets.emit('broadcast',{ msg: msg});
   });
})

require("./routes/usuario.routes")(app);
require("./routes/empleado.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8081;

http.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// http.listen(3000,()=>{
//   console.log(`Server is running on port 3000.`);
// })