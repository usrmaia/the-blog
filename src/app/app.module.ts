import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/header/nav-bar/nav-bar.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { TitleComponent } from './components/title/title.component';
import { CardNewsFullComponent } from './components/card-news-full/card-news-full.component';
import { CardNewsSummaryComponent } from './components/card-news-summary/card-news-summary.component';
import { CardNewsPictureComponent } from './components/card-news-picture/card-news-picture.component';
import { CardNewsVerticalRComponent } from './components/card-news-vertical-r/card-news-vertical-r.component';
import { CardNewsHorizontalRComponent } from './components/card-news-horizontal-r/card-news-horizontal-r.component';
import { TopicNewsComponent } from './components/topic-news/topic-news.component';
import { CommentComponent } from './components/comment/comment.component';
import { NewsComponent } from './components/pages/news/news.component';
import { CardNewsComponent } from './components/card-news/card-news.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BlogComponent,
    TitleComponent,
    CardNewsFullComponent,
    CardNewsSummaryComponent,
    CardNewsPictureComponent,
    CardNewsVerticalRComponent,
    CardNewsHorizontalRComponent,
    TopicNewsComponent,
    CommentComponent,
    NewsComponent,
    CardNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
