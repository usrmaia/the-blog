import { Component, Input } from '@angular/core';
import { CardInfo } from 'src/app/models/CardInfo';

@Component({
  selector: 'app-card-news-full',
  templateUrl: './card-news-full.component.html',
  styleUrls: ['./card-news-full.component.scss']
})
export class CardNewsFullComponent {
  @Input() cardInfo:CardInfo = {
    id: 0,
    image: "",
    title: "",
    text: "",
    description: "",
    publish_date: ""
  };
}
