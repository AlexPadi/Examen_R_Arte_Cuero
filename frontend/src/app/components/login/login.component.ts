import { Component } from '@angular/core';
import { Student } from 'src/app/models/student.model/student.model';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Admin } from 'src/app/models/admin.model/admin.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  admins?: Admin[];
  students?: Student[];
  //currentStudent: Student = {};
  //currentIndex = -1;
  email = '';
  pass='';
  constructor(private studentService: StudentService,private adminService: AdminService,private router: Router){}
  
  findByEmail(): void {
    //this.currentStudent = {};
    //this.currentIndex = -1;


    this.adminService.findByEmail(this.email,this.pass)
      .subscribe({
        next: (dataA) => {
          this.admins = dataA;

          if (this.admins!=null) {
            this.router.navigate(["/admin"]);
          }
          else if (this.admins==null) {
            this.studentService.findByEmail(this.email,this.pass)
            .subscribe({
              next: (dataS) => {
                this.students = dataS;

                if (this.students!=null) {
                  this.router.navigate(["/noticias"]);
                }          
              },
                error: (e) => console.error(e)
            });
          }
          //this.router.navigate(["/noticias"]);
          
        },
        error: (e) => console.error(e)
      });

  }
}
