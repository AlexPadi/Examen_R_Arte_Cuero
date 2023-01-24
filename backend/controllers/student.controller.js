const Student=require('../models/Student');
const studentController={};

studentController.getStudent=async (req, res)=>
{
    const student= await Student.find();
    res.json(student);
// res.json({ status: 'Listado Gastos '});
}

studentController.createStudent= async (req, res)=>{
    const student=new Student({
        name: req.body.name,
        email: req.body.email,
        telephone: req.body.telephone,
        pass: req.body.pass
    });
    console.log(student);
    await student.save();
    res.json('status: student guardado');
}
studentController.getStudent=async (req, res)=>{
    console.log(req.params.id);
    const student=await Student.findById(req.params.id);
    res.json(student);
}
studentController.editStudent=async (req, res)=>{
    const {_id}=req.params;
    const student={
        name: req.body.name,
        email: req.body.email,
        telephone: req.body.telephone,
        pass: req.body.pass
    };
    await Student.findByIdAndUpdate(_id, {$set:student},{new: true});
    res.json('status: student actualizado');
}

studentController.deleteStudent=async (req, res)=>{
    await Student.findByIdAndRemove(req.params.id);
    res.json('status: student borrado');
}
module.exports=studentController;