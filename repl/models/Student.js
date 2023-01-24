const mongoose=require('mongoose');
const {Schema}=mongoose;

const StudentSchema=new Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    telephone:{type:String, required:true},
    pass:{type:String, required: true}
   })
   module.exports=mongoose.model('Student',StudentSchema);