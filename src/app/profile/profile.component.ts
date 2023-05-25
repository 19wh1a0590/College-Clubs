import { Component, OnInit} from '@angular/core';
declare var jQuery: any;
declare var name: any;


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user1: any;
  editObj: any;
  msg: any;
  constructor() {}

  ngOnInit(): void {
    new name();
    this.editObj ={ about: ""};
    this.user1 = JSON.parse(localStorage.getItem("Users") || '{}');
  }
   
 
 
  

}