import { Component } from '@angular/core';
//import { Usuario } from 'src/app/models/usuario.model/usuario.model';
//import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent {
  /*usuarios?: Usuario[];

  constructor(private usuarioService: UsuarioService,private router: Router){
    this.loadData();
  }

  loadData(): void {
    this.usuarioService.getAll()
      .subscribe({
        next: (data) => {
          this.usuarios = data;

          // if (this.empleados!=null) {
          //   this.router.navigate(["/empleado"]);
          // }
          // else if (this.empleados==null) {
            
          // }
          //this.router.navigate(["/comentarios"]);
          
        },
        error: (e) => console.error(e)
      });
  }

  editUsuario(usuario:Usuario):void{
    this.router.navigate(['/edit'], { state: { data: usuario } });
  }*/
}
