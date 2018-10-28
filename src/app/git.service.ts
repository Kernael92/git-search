import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import  'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class GitService {

   private username:string;
   private clientid = "a25864f0b9beb8365225";
   private clientsecret = "4ba75bacf663cb9b6ec0f7f4f365f985c79ff3e";


  constructor(private http:Http) {
     console.log("service is now ready!");
     this.username = "Kernael92";
 }
 getProfileInfo(){
    return this.http.get("https://api.github.com/users/"+ this.username + "?client_id"+ this.clieid + "?client_secret" + this.clientsecret).map(res => res.json());
}
}
