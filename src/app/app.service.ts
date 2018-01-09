import{Injectable} from '@angular/core';
import{Observable} from 'rxjs/Rx';
import {Http, Headers, Response} from '@angular/http';

@Injectable()
export class appService{
  data;
  constructor(private http: Http) {
         this.getJSON();
    }

    public getJSON(){
      console.log("yello");
         this.http.get("assets/content.json").subscribe(res => this.data = res.json());
         return this.data
     }
}
