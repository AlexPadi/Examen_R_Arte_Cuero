import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/models/empleado.model/empleado.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  empleados?: Empleado[];
  usuarios?: Usuario[];
  currentUsuario: any ;
  //currentIndex = -1;
  email = '';
  pass='';
  constructor(private usuarioService: UsuarioService,private empleadoService: EmpleadoService,private router: Router){}
  
  findByEmail(): void {
    //this.currentUsuario = {};
    //this.currentIndex = -1;


    this.empleadoService.findByEmail(this.email,this.pass)
      .subscribe({
        next: (dataA) => {
          this.empleados = dataA;

          if (this.empleados!=null) {
            this.router.navigate(["/empleado"]);
          }
          else if (this.empleados==null) {
            this.usuarioService.findByEmail(this.email,this.pass)
            .subscribe({
              next: (dataS) => {
                this.usuarios = dataS;
                
                if (this.usuarios!=null) {
                  //this.currentUsuario=dataS;
                  console.log(this.email)
                  localStorage.setItem('email',this.email);
                  this.router.navigate(["/"]);
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
