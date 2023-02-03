import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student.model/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  state:any;
  student: Student;
  secondPass: String;
<<<<<<< HEAD

  constructor(private studentService:StudentService,private router: Router) {
=======
  
  constructor(private router: Router) {
>>>>>>> 4f29c429cdebb657f359e8ffc1e125adb2c6e06a
    this.state=this.router.getCurrentNavigation()?.extras.state ;
    this.student=this.state.data;
    this.secondPass="";
  }
  confirmDelete(){
    var respuesta = confirm("Estas seguro que deseas Eliminar al usuario?"); 
    if (respuesta == true){
      return true;
    }
    else{
      return false;
    }
  }
  updateStudent(){
    this.studentService.update(this.student.id,this.student)
    .subscribe({
      next: (res) => {
        console.log(res);
        //this.message = res.message ? res.message : 'This tutorial was updated successfully!';
      },
      error: (e) => console.error(e)
    });
  }
}
