const mongoose=require('mongoose');
const URI='mongodb://localhost:27017/asu';
mongoose.connect(URI)
.then(db=> console.log('BD conectada'))
.catch(err => console.error(err));

module.exports=mongoose;