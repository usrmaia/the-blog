import { Component } from '@angular/core';
import { CardInfo } from 'src/app/models/CardInfo';
import { CommentInfo } from 'src/app/models/CommentInfo';
import { WordNewsAPI } from './services/word-news-api.service';
import { CommentsAPI } from './services/comments-api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss', 'blog.component.desktop.scss']
})
export class BlogComponent {
  news:Array<CardInfo> = [];
  newsReturned:Array<number> = [];

  comments:Array<CommentInfo> = [];
  commentsReturned:Array<number> = [];
  
  constructor(private wordNewsAPI:WordNewsAPI, private commentsAPI:CommentsAPI){
    this.getAllNews();
    this.getAllComments();
  }

  public getAllComments() {
    this.commentsAPI.getAllComments().subscribe(data => this.comments = data);
  }

  public getAllNews() {
    this.wordNewsAPI.getAllNews().subscribe(data => {
      this.news = data.map(iten => {
        iten.description = iten.text.slice(0, 187).concat('...');

        if (!iten.image) { iten.image = '../assets/img/img-null.png'; }

        iten.publish_date = iten.publish_date.slice(0, 10);
        const date = iten.publish_date.split('-');
        const day = date[2];
        const month = date[1];
        const year = date[0];
        iten.publish_date = `${day} de ${month} de ${year}`;

        return iten;
      })
    });
  }

  public getNews():CardInfo {
    let randomId:number = Math.floor(Math.random() * this.news.length);
    
    while (true) {
      if (randomId in this.newsReturned) {
        randomId++;
        if (randomId === this.news.length) {
          randomId = 0;
        }
        continue;
      }
      break;
    }

    return this.news[randomId];
  }

  public getComment():CommentInfo {
    let randomId:number = Math.floor(Math.random() * this.comments.length);
    
    while (true) {
      if (randomId in this.commentsReturned) {
        randomId++;
        if (randomId === this.comments.length) {
          randomId = 0;
        }
        continue;
      }
      break;
    }

    return this.comments[randomId];
  }
}
