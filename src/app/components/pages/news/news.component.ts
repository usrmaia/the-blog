import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardInfo } from 'src/app/models/CardInfo';
import { WordNewsAPI } from '../blog/services/word-news-api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news:CardInfo = {
    id: 0,
    image: '',
    title: '',
    publish_date: '',
    description: '',
    text: ''
  }

  constructor (private route:ActivatedRoute, private wordNewsAPI:WordNewsAPI) { }

  ngOnInit(): void {
    const id:string | null = this.route.snapshot.paramMap.get('id');

    if (id) { this.getAllNews(parseInt(id)) }
  }

  public getAllNews(id:number) {
    this.wordNewsAPI.getAllNews().subscribe(data => {
      this.news = data[id];
      
      if (!this.news.image) { this.news.image = '../../../../assets/img/img-null.png'; }

      this.news.publish_date = this.news.publish_date.slice(0, 10);
      const date = this.news.publish_date.split('-');
      const day = date[2];
      const month = date[1];
      const year = date[0];
      this.news.publish_date = `${day} de ${month} de ${year}`;
    });
  }
}

