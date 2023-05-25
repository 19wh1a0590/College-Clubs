import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  user: any;
  user1: any;
  flag: boolean;
  allMembers:any;


  constructor(private router: Router, private httpClient: HttpClient, private service: StudentService){
    this.flag = false;
   // this.user1 = {username: "", email: "", password: ""};
   this.service.seeUsers().subscribe((result)=>{this.allMembers=result;});

  }

  ngOnInit(): void {
    
  }

  // if(users.email === "admin@gmail.com" || users.password==="admin"){
  //   this.router.navigate(['admin']);
  // }
  passwordSubmit(pForm: any){
      console.log("Inside loginSubmit");
      this.user1 = {email: pForm.email, password: pForm.password};
      this.service.getUserByEmailAndPassword(pForm).subscribe((result:any)=>{
        this.checkCred(result)});
      // this.service.setUserLoggedIn();
      console.log("Data Fetched : ",this.user);
      
      // if(this.user != null){
        
      //   this.router.navigate(['home']);

      // }

  }
 


  checkCred(users:any){
    if(users===null){
      alert("Invalid username or password");
    }
   
  
  
    // console.log(users.email);
    // console.log(users.password);
    // console.log(this.email);
    // console.log(this.password);
   if(users.email===this.user1.email && users.password===this.user1.password ){
       //  alert("Logged in");
       
       this.user = users;
       localStorage.setItem('Users', JSON.stringify(this.user));
       
       this.user1.password === users.newpassword;
       

   }
   if(this.flag==false){
    alert("Incorrect password or email");
}
 

  }


  

}