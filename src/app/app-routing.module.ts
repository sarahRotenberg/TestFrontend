import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsComponent } from './components/applications/applications.component'
import { AppDetailsComponent } from './components/app-details/app-details.component';


const appRoutes: Routes = [

  
  { path: 'applications', component: ApplicationsComponent },
   { path: 'appDetails/:appId', component: AppDetailsComponent },
   { path: 'appDetails', component: AppDetailsComponent },
   { path: '**', component: ApplicationsComponent }
];


@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
