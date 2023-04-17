import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/pages/blog/blog.component';
import { NewsComponent } from './components/pages/news/news.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent
  },
  {
    path: 'news/:id',
    component: NewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
