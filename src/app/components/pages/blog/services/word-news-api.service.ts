import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './environment';
import { Observable } from 'rxjs';
import { CardInfo } from 'src/app/models/CardInfo';

@Injectable({
  providedIn: 'root'
})
export class WordNewsAPI {
  url:string = environment.wordNewsAPIBaseUrl;
  
  constructor(private http: HttpClient) { }

  public getAllNews():Observable<Array<CardInfo>> {
    return this.http.get<Array<CardInfo>>(this.url);
  }
}
