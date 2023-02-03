import { Component } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent {
  events:any[]=[];
  constructor(private eventService:EventsService){
    this.loadEvents();
  }

  loadEvents(){
    this.eventService.getEvents()
    .subscribe((data: any)=>{
      this.events=data.articles;
      console.log(this.events);
    })
  }
}
