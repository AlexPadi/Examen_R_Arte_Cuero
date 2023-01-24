import { Component } from '@angular/core';
import { Student } from 'src/app/models/student.model/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent {
  student: Student={
    name: "",
    email:"" ,
    telephone: "",
    pass:""
  }
  submitted = false;

  constructor(private studentService: StudentService){}

  newStudent(){
    const data = {
      name: this.student.name,
      email: this.student.email,
      telephone:this.student.telephone,
      pass:this.student.pass
    };
    
    this.studentService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
}
