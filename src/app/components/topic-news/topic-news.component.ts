import { Component, Input } from '@angular/core';
import { CardInfo } from 'src/app/models/CardInfo';

@Component({
  selector: 'app-topic-news',
  templateUrl: './topic-news.component.html',
  styleUrls: ['./topic-news.component.scss']
})
export class TopicNewsComponent {
  @Input() cardInfo:CardInfo = {
    id: 0,
    image: "",
    title: "",
    text: "",    
    description: "",
    publish_date: "",
  };
}
