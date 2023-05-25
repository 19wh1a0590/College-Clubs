import { Component,OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StudentService } from '../student.service';
import { PracticeComponent } from '../practice/practice.component';
declare var jQuery: any;
declare var name:any;

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  event:any;
  user:any;
  user1:any;
  allEvents:any;
  // userSubmitted: any;
  exform:any;
  constructor(private router: Router,private service:StudentService,private httpClient:HttpClient) { 
    this.event = {id:"",eventname:"",date:""};
  }

  ngOnInit(): void {
    new name();
    this.user=localStorage.getItem("Users");
    this.user1 = JSON.parse(this.user);
  }

  seeEvents(){
    this.service.seeEvents().subscribe((result)=>{this.allEvents=result;});
  }

  
  
  

}
