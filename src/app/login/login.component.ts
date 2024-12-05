import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Login } from '../login';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginRef = new FormGroup({
    emailid:new FormControl(),
    password:new FormControl(),
    typeofuser:new FormControl()
  });
msg:string ="";
returnUrl='';
  constructor(private ls:LoginService,private activatedRoute:ActivatedRoute, private router:Router){}     // DI for LoginService 
  ngOnInit(): void {
    this.returnUrl= this.activatedRoute.snapshot.queryParams['returnUrl'];
  }
  signIn(): void {
    let login = this.loginRef.value;
   // console.log(login);
this.ls.signIn(login).subscribe(() => {
  if(login.typeofuser==="admin")
    this.router.navigateByUrl("/dashboard");
  else
  this.router.navigateByUrl(this.returnUrl); // After successful login, navigate to the stored return URL
});

    /* this.ls.signIn(login).subscribe({
      next:(result:any)=> {
        console.log("full return "+result)
        
        if(result=="Admin login successfully"){
          console.log("admin url is "+this.returnUrl);
           this.router.navigate(['/admin']);
        }else if(result=="Customer login successfully"){
          console.log("customer url is "+this.returnUrl);
          this.router.navigate(['/customer'])
        }else {
          this.msg=result;
        }
        
      },
      error:(error:any)=> {
          console.log(error)
      },  
      complete:()=> {
        console.log("SignIn done!")
      }
    })
    this.loginRef.reset(); */
  
}

}