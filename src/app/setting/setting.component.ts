import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { HttpClient } from '@angular/common/http';

declare var name: any;
// declare var validateForm: any;

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  user:any;
  user1: any;
  user2: any;
  user3:any;
  editObject: any;
 
  flag: boolean;

  constructor(private service: StudentService, private httpClient: HttpClient,private router: Router) {
    this.flag =false;
   }

  ngOnInit(): void {
    new name();
    // new validateForm();
    this.user1 = JSON.parse(localStorage.getItem("Users") || '{}');
    this.user2 = [{username:this.user1.username, email:this.user1.email, password:this.user1.password}];
    this.editObject = {username: "", email: "", password: ""};
   
  }
  
  // showEditPopup(user: any) {
  //   this.editObject = user;
  //   jQuery('#userModel').modal('show');
  // }

 
  
  updateUser(uForm:any) {
   
    // if(uForm.newpassword==null){
    //   alert("Enter new password");
    // }
    if(uForm.password===this.user1.password){
      this.user3 = {email:this.user1.email, password:uForm.newpassword};
      this.service.changePwd(this.user3).subscribe();
    alert("Updated successfully");
    window.location.reload();
  }
  
  else{
    alert("Your current pwd didn't match");
  }

  }  
}