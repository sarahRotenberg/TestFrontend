import { Component, OnInit } from '@angular/core';
import { ITrans } from 'src/app/models/ITrans';
import { ICard } from 'src/app/models/ICard';


import {CardModule} from 'primeng/card'
import { IApplication } from 'src/app/models/IApplication';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-app-details',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.css']
})
export class AppDetailsComponent implements OnInit {

  constructor(private dataService:DataService ) {}
  
  trans:ITrans[];
  appDetails:IApplication;
  transTypeArray:string[]=['','AUTH','COMMIT','REFUND'];
  

  ngOnInit() {
   // this.dataService.changeSelectedApp(this.appDetails);
    this.dataService.selectedApp.subscribe(data=>{
      this.appDetails = data;
         
        this.dataService.GetTrans(data.id).subscribe((data: any[]) => {
          this.trans=data;
          this.trans.map(t => {
             t.transTypeDescription=this.transTypeArray[ t.transType];
         });
         // this.createFinalArray();
          console.log(data);
           },
             error => {
               console.log('error  GetTrans')
             });
  
       
    });
 
}
  
       
}  
       
         
 
