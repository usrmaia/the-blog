import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './environment';
import { Observable } from 'rxjs';
import { CommentInfo } from 'src/app/models/CommentInfo';

@Injectable({
  providedIn: 'root'
})
export class CommentsAPI {
  url:string = environment.commentsAPIBaseUrl;
  
  constructor(private http: HttpClient) { }

  public getAllComments():Observable<Array<CommentInfo>> {
    return this.http.get<Array<CommentInfo>>(this.url);
  } 
}
