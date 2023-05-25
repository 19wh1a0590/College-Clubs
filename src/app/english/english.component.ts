import { Component, OnInit } from '@angular/core';
declare var name: any;
@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.css']
})
export class EnglishComponent implements OnInit {
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
