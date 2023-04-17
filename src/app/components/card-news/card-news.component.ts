import { Component, Input } from '@angular/core';
import { CardInfo } from 'src/app/models/CardInfo';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.scss']
})
export class CardNewsComponent {
  @Input() cardInfo:CardInfo = {
    id: 0,
    image: "",
    title: "",
    text: "",
    description: "",
    publish_date: ""
  };
}
