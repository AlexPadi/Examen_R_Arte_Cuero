import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  getEvents(){
    return this.http.get("https://newsapi.org/v2/top-headlines?country=co&category=sports&apiKey=ae86f18b3e4c42249930f6cd3bcb0356");
  }
}
