import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {




  signupUsers: {userName:string, email:string, password:string}[]=[];



  signupObj:{userName:string, email:string, password:string}={

    userName:'',
    email:'',
    password:''

  };



  ngOnInit(): void {
    const locaData=localStorage.getItem('signUpUsers');
    if(locaData != null){
      this.signupUsers = JSON.parse(locaData);
    }

  }


  onSignUp(){
     this.signupUsers.push(this.signupObj);
     localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers));
     this.signupObj = {
      userName:'',
      email:'',
      password:''
     };
  }











}
