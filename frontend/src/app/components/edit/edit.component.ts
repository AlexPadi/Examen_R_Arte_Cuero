import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private studentService:StudentService,private router: Router) {
    this.state=this.router.getCurrentNavigation()?.extras.state ;
    this.student=this.state.data;
  }
  confirmDelete(){
    var respuesta = confirm("Estas seguro que deseas Eliminar al usuario?"); 
    if (respuesta == true){
      this.studentService.delete(this.student.id)
      .subscribe({
        next: (res) => {
        console.log(res);
        this.router.navigate(['/admin']);
        //this.toastr.success("Se actualizado el estudiante correctamente");
        //this.message = res.message ? res.message : 'This tutorial was updated successfully!';
      },
      error: (e) => console.error(e)
    });
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
        this.router.navigate(['/admin']);
        //this.message = res.message ? res.message : 'This tutorial was updated successfully!';
      },
      error: (e) => console.error(e)
    });
  }
}
