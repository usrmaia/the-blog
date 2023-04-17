import { Component, Input } from '@angular/core';
import { CardInfo } from 'src/app/models/CardInfo';

@Component({
  selector: 'app-card-news-vertical-r',
  templateUrl: './card-news-vertical-r.component.html',
  styleUrls: ['./card-news-vertical-r.component.scss']
})
export class CardNewsVerticalRComponent {
  @Input() cardInfo:CardInfo = {
    id: 0,
    image: "",
    title: "",
    text: "",    
    description: "",
    publish_date: "",
  };
}
