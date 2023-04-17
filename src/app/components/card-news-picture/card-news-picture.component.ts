import { Component, Input } from '@angular/core';
import { CardInfo } from 'src/app/models/CardInfo';

@Component({
  selector: 'app-card-news-picture',
  templateUrl: './card-news-picture.component.html',
  styleUrls: ['./card-news-picture.component.scss']
})
export class CardNewsPictureComponent {
  @Input() cardInfo:CardInfo = {
    id: 0,
    image: "",
    title: "",
    text: "",
    description: "",
    publish_date: ""
  };
}
