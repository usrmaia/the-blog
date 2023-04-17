import { Component, Input } from '@angular/core';
import { CardInfo } from 'src/app/models/CardInfo';

@Component({
  selector: 'app-card-news-horizontal-r',
  templateUrl: './card-news-horizontal-r.component.html',
  styleUrls: ['./card-news-horizontal-r.component.scss']
})
export class CardNewsHorizontalRComponent {
  @Input() cardInfo:CardInfo = {
    id: 0,
    image: "",
    title: "",
    text: "",    
    description: "",
    publish_date: "",
  };
}
