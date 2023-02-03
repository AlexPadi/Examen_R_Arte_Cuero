import { Injectable } from '@angular/core';
import { Mensaje } from '../models/mensaje.model/mensaje.model';

@Injectable({
  providedIn: 'root'
})
export class WebSocketServiceService {
  webSocket?:WebSocket;
  mensajes: Mensaje[]=[];

  constructor() { }

  // public openWebSocket(){
  //   this.webSocket= new WebSocket('ws://localhost:8082/chat');

  //   this.webSocket.onopen=(e)=>{
  //     console.log("Open", e);
  //   }

  //   this.webSocket.onmessage=(e)=>{
  //     const mensaje= JSON.parse(e.data);
  //     this.mensajes.push(mensaje);
  //   }

  //   this.webSocket.onclose=(e)=>{
  //     console.log("Close", e);
  //   }
  // }

  // public sendMensaje(mensaje: Mensaje){
  //   this.webSocket.send(JSON.stringify(mensaje));
  // }

  // public closeWebSocket(){
  //   this.webSocket.close();
  // }
}
