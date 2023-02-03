import {Component, OnDestroy, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Mensaje } from 'src/app/models/mensaje.model/mensaje.model';
import { WebSocketServiceService } from 'src/app/services/web-socket-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit,OnDestroy{
  mostrarChat=false;
  newMensaje="";
  mensajes: any[]=[
    {
      reseptor:"id",
      text:"sdasd"
    },
    {
      emisor:"id",
      text:"hola gente como estamos todoas  q lo disfrutemoss dicen"
    }
  ];
  constructor(public webSoketService: WebSocketServiceService){}

  ngOnInit(): void{
    //this.webSoketService.openWebSocket();
  }

  ngOnDestroy(): void {
    //this.webSoketService.closeWebSocket();
  }

  sendMensaje(sendForm: NgForm){
    const mensaje= new Mensaje(sendForm.value.user,"null",sendForm.value);
    console.log(this.newMensaje);
  }
}
