import { Component, OnInit } from '@angular/core';
declare var name:any;
@Component({
  selector: 'app-cultural',
  templateUrl: './cultural.component.html',
  styleUrls: ['./cultural.component.css']
})
export class CulturalComponent implements OnInit {
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
