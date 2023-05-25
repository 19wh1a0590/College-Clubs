import { Component,OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StudentService } from '../student.service';
declare var jQuery:any;
declare var name:any;
@Component({
  selector: 'app-comment-english',
  templateUrl: './comment-english.component.html',
  styleUrls: ['./comment-english.component.css']
})
export class CommentEnglishComponent implements OnInit{
  commente:any; //table name
  user:any; //edit obj
  user1:any;
  allCpp_commentse:any;
  ngForm:any;
  constructor(private router: Router,private service:StudentService,private httpClient:HttpClient) { 
    this.commente = {id:"",username:"",comment:""};
    this.service.cppShowCommentse().subscribe((result)=>{this.allCpp_commentse=result;});
  }

 

 
  ngOnInit(): void {
    new name();
    this.user=localStorage.getItem("Users");
    this.user1 = JSON.parse(this.user);
  }
  
  ccAddComment_e(ccForm:any){
    this.commente.username=this.user1.username;
    console.log(this.commente.username);
    this.commente.comment=ccForm.comment;
    // console.log(this.comments.email);
    console.log(this.commente.comment);
    this.service.ccAddComment_e(this.commente).subscribe();
    window.location.reload();
    
  }
  showEditPopup(user: any) {
    this.commente = user;
    jQuery('#userModel').modal('show');
  }

  
  cppShowCommentse(){
    this.service.cppShowCommentse().subscribe((result)=>{this.allCpp_commentse=result;});
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
