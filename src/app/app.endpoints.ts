import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppEndpoints {
  private endpoint: string;

    constructor(private httpClient: HttpClient) {
        this.endpoint = "https://digimon-api.vercel.app/api/digimon";
    }

    /* get_endpoint(){
        return "https://" + window.location.hostname + "";
    } */


    /* get_picture_endpoint(name:string) {
      return this.get_endpoint() + '/images/' + name;
    } */
     get_digimon_api (): Observable<any>{
      return this.httpClient.get(this.endpoint, {responseType: 'json'});
    }

}
