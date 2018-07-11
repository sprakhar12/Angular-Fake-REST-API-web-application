import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { CollapseModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { MainPagesComponent } from './Main/main-pages.component';
import { DetailPageComponent } from './detail/detail-page.component';
import { MainPageService } from './services/main-page.service';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPagesComponent,
    DetailPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    Angular2FontawesomeModule,
    HttpModule,
    NgxPaginationModule,
    CollapseModule,
    RouterModule.forRoot([
      {
      path:'', 
      component: MainPagesComponent
      },
      {
        path:'Details', 
        component: DetailPageComponent
      },
    ]),
  ],
  providers: [MainPageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
