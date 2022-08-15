import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { parse } from "url";


import { publish, switchMap } from "rxjs/operators";

import { Observable } from "rxjs";
import { IApplication } from "../models/IApplication";


@Injectable()
export class DataService {
   //public isLoading = new BehaviorSubject<Load>({ isLoading: false, loadingText: 'מאתר נתונים' });


 //  SystemSetting$: BehaviorSubject<SystemSetting> = new BehaviorSubject<SystemSetting>(undefined);

   constructor(private http: HttpClient, @Inject('BASE_URL') public baseUrl: string) {

     
   }
 // public selectedApp:IApplication;
  private app = new BehaviorSubject<IApplication>(null);
  
  selectedApp = this.app.asObservable();
 

  async init() {
   
   
  }
   
  changeSelectedApp(selectedApp: IApplication) {
   this.app.next(selectedApp);
 }
   GetApplications() {
      return this.http.get(`${this.baseUrl}api/test/applications`);
   }

   GetCards(appId) {
      return this.http.get(`${this.baseUrl}api/test/cards/${appId}`);
   }

   GetTrans(appId) {
      return this.http.get(`${this.baseUrl}api/test/trans/${appId}`);
   }


   //checkAuthorizedForChange(reqId:number) {
   //   return this.http.get(`${this.baseUrl}api/tut/nihulHavarot/isCanChangeReqStatus/${reqId}`);
   //}
}
