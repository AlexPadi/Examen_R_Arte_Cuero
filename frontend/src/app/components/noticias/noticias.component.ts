import { Component } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent {
  news:any[]=[];
  constructor(private newService:NewsService){
    this.loadNews();
  }

  loadNews(){
    this.newService.getNews()
    .subscribe((data: any)=>{
      this.news=data.articles;
      console.log(this.news);
    })
  }
}
