import { Component, OnInit } from '@angular/core';
import { GitService } from '../git.service';
@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {
   user:any;
   repos:any;
   username: string;

  constructor( private gitService: GitService) {
     this.gitService.getUserInfo().subscribe(user =>{
      console.log(user);
      this.user= user;
   });
     this.gitService.getUserRepos().subscribe(repos =>{
      console.log(repos);
      this.repos = repos;
   });

 }
 findProfile(){
    this.gitService.updateProfile(this.username);
    this.gitService.getUserInfo().subscribe(user =>{
      console.log(user);
      this.user= user;
   });
    this.gitService.getUserRepos().subscribe(repos =>{
      console.log(repos);
      this.repos = repos;
   });
}




  ngOnInit() {
  }

}
