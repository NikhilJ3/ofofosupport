import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { NewsblogComponent } from './newsblog/newsblog.component';

const routes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'news/:newsId', component: NewsblogComponent },
  { path: '**', redirectTo: '' }, // Redirect to the default route for any unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
