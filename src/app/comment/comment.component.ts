import { Component, OnInit} from '@angular/core';
import {Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StudentService } from '../student.service';
declare var jQuery:any;
declare var name:any;

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comment:any; //table name
  user:any; //edit obj
  user1:any;
  allCpp_comments:any;
  ngForm:any;
  constructor(private router: Router,private service:StudentService,private httpClient:HttpClient) { 
    this.comment = {id:"",username:"",comment:""};
    this.service.cppShowComments().subscribe((result)=>{this.allCpp_comments=result;});
  }

 

 
  ngOnInit(): void {
    new name();
    this.user=localStorage.getItem("Users");
    this.user1 = JSON.parse(this.user);
  }
  
  ccAddComment(ccForm:any){
    this.comment.username=this.user1.username;
    console.log(this.comment.username);
    this.comment.comment=ccForm.comment;
    // console.log(this.comments.email);
    console.log(this.comment.comment);
    this.service.ccAddComment(this.comment).subscribe();
    window.location.reload();
    
  }

  showEditPopup(user: any) {
    this.comment = user;
    jQuery('#userModel').modal('show');
  }

  
  cppShowComments(){
    this.service.cppShowComments().subscribe((result)=>{this.allCpp_comments=result;});
  }


}