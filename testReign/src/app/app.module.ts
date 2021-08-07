import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwitchPublicationsComponent } from './shared/switch-publications/switch-publications.component';
import { PersistenceModule, PersistenceService } from 'angular-persistence';
import { PersistenceUtilService } from './services/persistence.service';
import { ListNewsComponent } from './shared/list-news/list-news.component';
import { FiltertNewsComponent } from './shared/filtert-news/filtert-news.component';
import { AppNewsComponent } from './components/app-news/app-news.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    SwitchPublicationsComponent,
    ListNewsComponent,
    FiltertNewsComponent,
    AppNewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersistenceModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [PersistenceService, PersistenceUtilService],
  bootstrap: [AppComponent],
})
export class AppModule {}
