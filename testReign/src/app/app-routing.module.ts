import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppNewsComponent } from './components/app-news/app-news.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: AppNewsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
