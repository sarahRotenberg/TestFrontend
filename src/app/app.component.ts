import { Component, Inject } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import {  ActivatedRoute } from '@angular/router';
import {ApplicationsComponent} from 'src/app/components/applications/applications.component';
import { IApplication } from 'src/app/models/IApplication';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'Test';
  constructor(public dataService:DataService,private http: HttpClient, @Inject('BASE_URL') private baseUrl: string ) { }
  applicationList:IApplication[];
  ngOnInit() {
   
  }



  }





 


