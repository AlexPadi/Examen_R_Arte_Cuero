import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(){
    return this.http.get("https://newsapi.org/v2/top-headlines?country=ar&category=science&apiKey=ae86f18b3e4c42249930f6cd3bcb0356");
  }
}
