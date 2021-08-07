import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppNewsComponent } from './components/app-news/app-news.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: AppNewsComponent },
      { path: '', redirectTo: '', pathMatch: 'full' },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
