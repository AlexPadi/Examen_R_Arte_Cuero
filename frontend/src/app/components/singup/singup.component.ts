import { Component,OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin.model/admin.model';
import { Student } from 'src/app/models/student.model/student.model';
import { AdminService } from 'src/app/services/admin.service';
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

  admin: Admin={
    name: "",
    email:"" ,
    telephone: "",
    pass:""
  }
  submitted = false;

  constructor(private studentService: StudentService,private adminService: AdminService){}

  ngOnInit(): void {
  }

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

  newAdmin(){ 
    const data = {
      name: this.admin.name,
      email: this.admin.email,
      telephone:this.admin.telephone,
      pass:this.admin.pass
    };
    
    this.adminService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
}
