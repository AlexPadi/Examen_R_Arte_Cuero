import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  state:any;
  usuario: Usuario;

  constructor(private usuarioService:UsuarioService,private router: Router) {
    this.state=this.router.getCurrentNavigation()?.extras.state ;
    this.usuario=this.state.data;
  }
  confirmDelete(){
    var respuesta = confirm("Estas seguro que deseas Eliminar al usuario?"); 
    if (respuesta == true){
      this.usuarioService.delete(this.usuario.id)
      .subscribe({
        next: (res) => {
        console.log(res);
        this.router.navigate(['/empleado']);
        //this.toastr.success("Se actualizado el estudiante correctamente");
        //this.message = res.message ? res.message : 'This tutorial was updated successfully!';
      },
      error: (e) => console.error(e)
    });
      return true;
    }
    else{
      return false;
    }

    
  }
  updateUsuario(){
    this.usuarioService.update(this.usuario.id,this.usuario)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/empleado']);
        //this.message = res.message ? res.message : 'This tutorial was updated successfully!';
      },
      error: (e) => console.error(e)
    });
  }
}
