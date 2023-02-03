import {Component, OnDestroy, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Mensaje } from 'src/app/models/mensaje.model/mensaje.model';
import io from 'socket.io-client';

const SOCKET_ENDPOINT='localhost:8081';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit,OnDestroy{
  mostrarChat=false;
  socket:any;
  newMensaje="";
  indexMensaje=0;
  mensajes: any[]=[
    // {
    //   reseptor:"id",
    //   text:"sdasd"
    // },
    // {
    //   emisor:"id",
    //   text:"hola gente como estamos todoas  q lo disfrutemoss dicen"
    // }
  ];
  constructor(){}

  ngOnInit(): void{
    this.setupSocketConnection();
  }

  setupSocketConnection(){
    this.socket=io(SOCKET_ENDPOINT);

    // this.socket.on('message-broadcast',(data:Mensaje)=>{
    //   console.log(data);
    // });
    this.socket.on('broadcast',(data:any)=>{
      let currentMensaje=this.mensajes[this.mensajes.length-1];
      if (data.msg?.emisor!=currentMensaje?.emisor) {
        console.log(data.msg);
        data.msg.emisor=null;
        data.msg.reseptor=new Date()+"";
        this.mensajes.push(data.msg);
      }
      ;
   });
  }

  ngOnDestroy(): void {
    
  }

  sendMensaje(){
    const mensaje= new Mensaje(null,new Date()+"",this.newMensaje);
    this.socket.emit('message',mensaje);
    this.mensajes.push(mensaje);
    this.newMensaje="";
  }
}
