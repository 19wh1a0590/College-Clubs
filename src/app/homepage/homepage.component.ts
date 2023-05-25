import { Component, OnInit } from '@angular/core';
declare var name:any;
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{
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
