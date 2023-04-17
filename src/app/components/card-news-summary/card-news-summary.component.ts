import { Component, Input } from '@angular/core';
import { CardInfo } from 'src/app/models/CardInfo';

@Component({
  selector: 'app-card-news-summary',
  templateUrl: './card-news-summary.component.html',
  styleUrls: ['./card-news-summary.component.scss', 'card-news-summary.component.desktop.scss']
})
export class CardNewsSummaryComponent {
  @Input() cardInfo:CardInfo = {
    id: 0,
    image: "",
    title: "",
    text: "",    
    description: "",
    publish_date: "",
  };
}
