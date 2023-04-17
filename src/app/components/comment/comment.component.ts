import { Component, Input } from '@angular/core';
import { CommentInfo } from 'src/app/models/CommentInfo';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() commentInfo:CommentInfo = {
    id: 0,
    comment: '',
    profile: '',
    image: ''
  }
}
