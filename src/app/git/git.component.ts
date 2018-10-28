import { Component, OnInit } from '@angular/core';
import { GitService } from '../git.service';
@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {
   user:any;

  constructor( private gitService: GitService) {
     this.gitService.getProfileInfo().subscribe(user =>{
        console.log(user);
        this.user= user;
     })
 }

  ngOnInit() {
  }

}
