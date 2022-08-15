import { Component, Inject, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IApplication } from 'src/app/models/IApplication';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {


  constructor(private dataService:DataService,private router: Router,private http: HttpClient, @Inject('BASE_URL') private baseUrl: string ) { }
  applicationList:IApplication[];
  selectedAppliction:IApplication;
  message:string;
  subscription: Subscription;
  ngOnInit() {
    this.GetApplications();
  }

  public GetApplications(){

  this. dataService.GetApplications().subscribe((data: any[]) => {
 this.applicationList=data;
 console.log(data);
  },
    error => {
      console.log('error  GetApplications')
    });
  

  }

  public selectedApp(selectedApp)
  {
    //alert(this.baseUrl+'appDetails');
    this.selectedAppliction=  selectedApp;
    this.dataService.changeSelectedApp(this.selectedAppliction);

    this.router.navigate(['/appDetails']); 
   // this.router.navigate(['/', 'appDetails/'+selectedApp.id]);
   // window.location.href = 'http://localhost:4200/appDetails/'+selectedApp.id;
  }

  changeSelectedApp() {
    this.dataService.changeSelectedApp(this.selectedAppliction);
  }
  ngOnDestroy() {
    this.dataService.changeSelectedApp(this.selectedAppliction);
    ; 
 }


 



}

