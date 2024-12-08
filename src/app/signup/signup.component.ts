import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  loginRef = new FormGroup({
    emailid:new FormControl(),
    password:new FormControl(),
    name:new FormControl(),
    address:new FormControl(),
    typeofuser:new FormControl()
  });
  msg:string ="";
  returnUrl = '';
  constructor(private ls:LoginService, private activatedRoute:ActivatedRoute){}     // DI for LoginService 
  ngOnInit(): void {
    this.returnUrl= this.activatedRoute.snapshot.queryParams['returnUrl'];
  }
  signUp(): void {
    let login = this.loginRef.value;

    this.ls.signUp(login).subscribe({
      next:(result:any)=> {
        //console.log(result)
        this.msg=result;
      },
      error:(error:any)=> {
          console.log(error)
      },  
      complete:()=> {
        console.log("SignUp done!")
      }
    })
    console.log(login);

    this.loginRef.reset();
  }
}
