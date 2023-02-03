import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student.model/student.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  state:any;
  student: Student;
  secondPass: String;
  
  constructor(private router: Router) {
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
    
  }
}
