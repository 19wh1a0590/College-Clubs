import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var jQuery:any;
@Component({
  selector: 'app-admincertificate',
  templateUrl: './admincertificate.component.html',
  styleUrls: ['./admincertificate.component.css']
})
export class AdmincertificateComponent implements OnInit{
  certificate:any; //table name
  user:any; //edit obj
  user1:any;
  allCertificate:any;
  ngForm:any;
  constructor(private router: Router,private service:StudentService,private httpClient:HttpClient) { 
    this.certificate = {id:"",Email:"",ename:"",cer:"",username:"",year:"",rank:""};

    
  }

 

 
  ngOnInit(): void {
    this.user=localStorage.getItem("Users");
    this.user1 = JSON.parse(this.user);
  }
  
  cppAddCer(cppForm:any){
    this.certificate.Email=cppForm.Email;
    console.log(this.certificate.Email);

    this.certificate.ename=cppForm.ename;
    console.log(this.certificate.ename);

    this.certificate.cer=cppForm.cer;
    console.log(this.certificate.cer);

    this.certificate.username=cppForm.username;
    console.log(this.certificate.username);

    this.certificate.year=cppForm.year;
    console.log(this.certificate.year);

    this.certificate.rank=cppForm.rank;
    console.log(this.certificate.rank);

    this.service.cppAddCer(this.certificate).subscribe();
    alert("Event added");
    window.location.reload();
    
  }
 
  // seeEvents(){
  //   this.service.seeEvents().subscribe((result)=>{this.allEvents=result;});
  // }

  showEditPopup(user: any) {
    this.certificate = user;
    jQuery('#userModel').modal('show');
  }

  
}

