import { Component } from '@angular/core';
import { Student } from 'src/app/models/student.model/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-about-est',
  templateUrl: './about-est.component.html',
  styleUrls: ['./about-est.component.scss']
})
export class AboutEstComponent {
  students?: Student[];
  constructor(private studentService:StudentService){
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
}
