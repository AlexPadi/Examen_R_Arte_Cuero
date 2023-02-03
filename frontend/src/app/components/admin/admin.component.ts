import { Component } from '@angular/core';
import { Student } from 'src/app/models/student.model/student.model';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  students?: Student[];

  constructor(private studentService: StudentService,private router: Router){
    this.loadData();
  }

  loadData(): void {
    this.studentService.getAll()
      .subscribe({
        next: (data) => {
          this.students = data;

          // if (this.admins!=null) {
          //   this.router.navigate(["/admin"]);
          // }
          // else if (this.admins==null) {
            
          // }
          //this.router.navigate(["/noticias"]);
          
        },
        error: (e) => console.error(e)
      });
  }

  editStudent(student:Student):void{
    this.router.navigate(['/edit'], { state: { data: student } });
  }
}
