import { Component,OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StudentService } from '../student.service';
declare var jQuery:any;
declare var name:any;
@Component({
  selector: 'app-comment-cultural',
  templateUrl: './comment-cultural.component.html',
  styleUrls: ['./comment-cultural.component.css']
})
export class CommentCulturalComponent {
  commentc:any; //table name
  user:any; //edit obj
  user1:any;
  allCpp_commentsc:any;
  ngForm:any;
  constructor(private router: Router,private service:StudentService,private httpClient:HttpClient) { 
    this.commentc = {id:"",username:"",comment:""};
    this.service.cppShowCommentsc().subscribe((result)=>{this.allCpp_commentsc=result;});
  }

 

 
  ngOnInit(): void {
    new name();
    this.user=localStorage.getItem("Users");
    this.user1 = JSON.parse(this.user);
  }
  
  ccAddComment_c(ccForm:any){
    this.commentc.username=this.user1.username;
    console.log(this.commentc.username);
    this.commentc.comment=ccForm.comment;
    // console.log(this.comments.email);
    console.log(this.commentc.comment);
    this.service.ccAddComment_c(this.commentc).subscribe();
    window.location.reload();
    
  }
  showEditPopup(user: any) {
    this.commentc = user;
    jQuery('#userModel').modal('show');
  }

  
  cppShowCommentsc(){
    this.service.cppShowCommentsc().subscribe((result)=>{this.allCpp_commentsc=result;});
  }
//   deleteUser(event:any){
//     this.service.deleteUser(event).subscribe((result: any) =>{
   
//         this.allEvents.splice(this.allEvents.indexOf(event),1);

//       },
//       error=>{

//       }
//     )
//   }
// }

}

