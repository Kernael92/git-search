import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GitService {

   private username:string;
   private clientid = "a25864f0b9beb8365225";
   private clientsecret = "4ba75bacf663cb9b6ec0f7f4f365f985c79ff3e";


  constructor(private http:HttpClient) {
     console.log("service is now ready!");
     this.username = "Kernael92";
 }
 getUserInfo(){
    return this.http.get("https://api.github.com/users/"+ this.username + "?client_id"+ this.clientid + "&client_secret" + this.clientsecret);
}
getUserRepos(){
   return this.http.get("https://api.github.com/users/"+ this.username + "/repos?client_id"+ this.clientid + "&client_secret" + this.clientsecret);
}
}
