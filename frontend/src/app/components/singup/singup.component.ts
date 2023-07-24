import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado.model/empleado.model';
import { Usuario } from 'src/app/models/usuario.model/usuario.model';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent {
  usuario: Usuario={
    name: "",
    email:"" ,
    pass:""
  }

  empleado: Empleado={
    name: "",
    email:"" ,
    pass:""
  }
  submitted = false;

  constructor(private usuarioService: UsuarioService,private empleadoService: EmpleadoService,private router: Router){}

  ngOnInit(): void {
  }

  newUsuario(){
    
    const data = {
      name: this.usuario.name,
      email: this.usuario.email,
      pass:this.usuario.pass
    };
    
    this.usuarioService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.router.navigate(["/noticias"]);
        },
        error: (e) => console.error(e)
      });
  }

  newEmpleado(){ 
    const data = {
      name: this.usuario.name,
      email: this.usuario.email,
      pass:this.usuario.pass
    };
    
    this.empleadoService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
}
