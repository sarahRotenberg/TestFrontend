import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './services/data.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HeaderAppComponent } from './components/header-app/header-app.component';
import { AppDetailsComponent } from './components/app-details/app-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationsComponent,
    HeaderAppComponent,
    AppDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    
    
  ],
  exports: [ RouterModule,ApplicationsComponent,],
  providers: [DataService,{provide: 'BASE_URL', useFactory: getBaseUrl },
 
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseUrl() {
  //return document.getElementsByTagName('base')[0].href;

    return 'https://localhost:44329/';
}