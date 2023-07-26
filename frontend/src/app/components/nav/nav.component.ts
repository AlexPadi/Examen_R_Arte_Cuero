import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  userLoginOn: boolean = false;
  constructor(private usuarioService: UsuarioService) { }	
  ngOnInit(): void {
    /*this.usuarioService.currentUserLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn = this.userLoginOn;
      }
    })*/
  }
}
