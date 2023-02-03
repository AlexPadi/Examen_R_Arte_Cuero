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

  constructor(private studentService:StudentService,private router: Router) {
    this.state=this.router.getCurrentNavigation()?.extras.state ;
    this.student=this.state.data;
    this.secondPass="";
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
