import { Component, OnInit } from '@angular/core';
declare var name:any;
@Component({
  selector: 'app-sportvisit',
  templateUrl: './sportvisit.component.html',
  styleUrls: ['./sportvisit.component.css']
})
export class SportvisitComponent implements OnInit {
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
