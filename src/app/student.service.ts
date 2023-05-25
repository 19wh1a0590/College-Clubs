import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  userLoggedIn : boolean;

  constructor(private httpClient: HttpClient){
    this.userLoggedIn = false;
  }
  getUserByEmailAndPassword(loginForm: any){
    console.log(loginForm.email);
    console.log(loginForm.password);
    return this.httpClient.get('http://localhost:3000/login/'+loginForm.email+"/"+loginForm.password)
  }

  getUserByPassword(UpdateForm:any){
    return this.httpClient.get('http://localhost:3000/login/'+UpdateForm.password)

  }

  
  // updatePwd(editObject: any) {
  //   console.log(editObject.email);
  //   return this.httpClient.put('http://localhost:3000/update/', editObject.password);
  //  }


  getUserByDate(exform: any){
    console.log("Inside getUserbyDate " +exform.date + exform.password);
    return this.httpClient.get('http://localhost:3000/find/'+exform.date)
  }
  changePwd(editObj: any){
    console.log("Inside changePwd service" + editObj.email + editObj.password);
     return this.httpClient.put('http://localhost:3000/changePwd/', editObj);
  }

  getUserLoggedIn(){
    return this.userLoggedIn; //invoked whenvere we need this value
  }
  setUserLoggedIn(){
    this.userLoggedIn=true; //invoked whenver we logged in successfully
  }
 
  setUserLoggedOut(){
    this.userLoggedIn=false; //invoked whenver we logged out
  }
  showAllUsers(){
    return this.httpClient.get('http://localhost:3000/fetch');
  }


  cppAddComment(event:any){
    return this.httpClient.post('http://localhost:3000/event',event);
  }
  seeEvents(){
    return this.httpClient.get('http://localhost:3000/fetch_events');
  }

  seeUsers(){
    return this.httpClient.get('http://localhost:3000/fetch');
  }
  seeMembers(){
    return this.httpClient.get('http://localhost:3000/fetch_comment');
  }


  // allEvents(){
  //   return this.httpClient.get('http://localhost:3000/fetch_events');
  // }


  ccAddComment(comment:any){
    return this.httpClient.post('http://localhost:3000/comment',comment);
  }

  cppAddCer(createcertificate:any){
    return this.httpClient.post('http://localhost:3000/createcertificate',createcertificate);
  }

  ccAddComment_c(commentc:any){
    return this.httpClient.post('http://localhost:3000/commentc',commentc);
  }
  ccAddComment_e(commente:any){
    return this.httpClient.post('http://localhost:3000/commente',commente);
  }

  
  cppShowComments(){
    return this.httpClient.get('http://localhost:3000/fetch_comment');
  }

  cppShowCommentsc(){
    return this.httpClient.get('http://localhost:3000/fetch_commentc');
  }

  cppShowCommentse(){
    return this.httpClient.get('http://localhost:3000/fetch_commente');
  }



  deleteUser(event: any){
    console.log("inside service.ts: "+ event._id);
    return this.httpClient.delete('http://localhost:3000/delete/'+event.eventname);
  }
  
 

  seeClubs(email: any){
    // console.log("Inside service"+ email);
    return this.httpClient.get('http://localhost:3000/certificate/'+ email);
 
}

createClub(user: any) {
  console.log("Inside service.ts" + user);
  return this.httpClient.post('http://localhost:3000/createcertificate', user);
}


// getClubsByTopic(loginForm: any){
//   console.log(loginForm.email);
//   console.log(loginForm.password);
//   return this.httpClient.get('http://localhost:3000/login/'+loginForm.email+"/"+loginForm.password).toPromise();
// }


registerUser(event: any) {
  console.log("Inside service.ts" + event);
  return this.httpClient.post('http://localhost:3000/event', event);
}
}