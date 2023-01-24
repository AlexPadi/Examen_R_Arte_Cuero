const express=require('express');
const router=express.Router();

const student=require('../controllers/student.controller');

router.get('/',student.getStudent);
router.post('/', student.createStudent);
router.get('/:id',student.getStudent);
router.put('/:id',student.editStudent);
router.delete('/:id', student.deleteStudent);

module.exports=router;