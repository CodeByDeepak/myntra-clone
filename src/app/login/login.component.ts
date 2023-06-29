import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 constructor( ){}
  loginObj:{email:string, password:string}={
    email:'',
    password:'',


  }

  ngOnInit(): void {

  }



  onLogin() {
    // debugger

    // const isUserExist= this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
    // if(isUserExist != undefined){
    //   alert('user sucessfully logged In');
    // }
    // else{
    //   alert('Inavlid Credentials');
    // }
  }





}
