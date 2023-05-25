import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user1: any;
  editObj: any;
  msg: any;

  constructor() {}

  ngOnInit(): void {
    this.editObj ={ about: ""};
    this.user1 = JSON.parse(localStorage.getItem("Users") || '{}');
  }
}
