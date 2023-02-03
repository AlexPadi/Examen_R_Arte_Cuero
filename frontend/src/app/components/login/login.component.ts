import { Component } from '@angular/core';
import { Student } from 'src/app/models/student.model/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  students?: Student[];
  //currentStudent: Student = {};
  //currentIndex = -1;
  email = '';
  pass='';
  constructor(private studentService: StudentService){}
  
  findByEmail(): void {
    //this.currentStudent = {};
    //this.currentIndex = -1;

    this.studentService.findByEmail(this.email,this.pass)
      .subscribe({
        next: (data) => {
          this.students = data;
          console.log(this.students);
        },
        error: (e) => console.error(e)
      });

  }
}
