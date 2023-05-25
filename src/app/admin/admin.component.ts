import { Component,OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StudentService } from '../student.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var jQuery:any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  exform !: any;
  userSubmitted !: boolean  ;
  user1:any;
  event:any;
  comment:any;
  user :any;
  allEvents:any;
  allMembers:any;
  // emailPattern = "^[a-z0-9](\.?[a-z0-9]){2,}@g(oogle)?mail\.com$";
  // allEvents:any;
  // ngForm:any;
  constructor(private router: Router,private service:StudentService,private httpClient:HttpClient) {

    this.event = {id:"",eventname:"",date:""};
    this.comment = {id:"",username:"",comment:""},
    this.service.seeEvents().subscribe((result)=>{this.allEvents=result;});
    this.service.seeMembers().subscribe((result)=>{this.allMembers=result;});
   }

 

  ngOnInit(): void {
    this.exform = new FormGroup({
      eventname: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
    });
  }
 
 
  registerUser(): void{
    this.userSubmitted = true;
    this.service.getUserByDate(this.exform.value).subscribe((result:any)=>this.userRegister(result));  
  }
  userRegister(result:any){
    if(result===null){
      console.log("data fetched: ", this.exform.value);
      this.service.registerUser(this.exform.value).subscribe((result: any)=>
      console.log(result));
      localStorage.setItem('Users', JSON.stringify(this.exform.value));
      this.userSubmitted = false;
      // alert("Submitted")
      alert("Event added");
    window.location.reload();
    }
    else{
      alert("Overlapping");
    window.location.reload();

    }
  }
  get eventname() {
    return this.exform.get('eventname');
  }
  get date() {
    return this.exform.get('date');
  }
  
  deleteUser(event:any){
    this.service.deleteUser(event).subscribe((result: any) =>{
   
        this.allEvents.splice(this.allEvents.indexOf(event),1);

      },
      error=>{

      }
    )
  }
}
