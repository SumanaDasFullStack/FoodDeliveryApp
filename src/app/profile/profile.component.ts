import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  isSubmitted: boolean = false;
  // returnUrl = ''; // I think its not needed here

  constructor(private userService: LoginService, private activatedRoute: ActivatedRoute, private router: Router) {
    let { emailid, typeofuser } = userService.currentUser;
    this.profileForm = new FormGroup({
      name: new FormControl(emailid, [Validators.required]),
      address: new FormControl(typeofuser, [Validators.required])
    })
  }

  ngOnInit(): void {
    // this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;  //why
  }

  updateProfile() {
    this.isSubmitted = true;
    if (this.profileForm.invalid) {
      // this.toastrService.warning('Please fill the inputs', 'Invalid Inputs');
      return;
    }

    const name = this.profileForm.value.name as string;
    const address = this.profileForm.value.address as string;

    this.userService.updateProfile(this.userService.currentUser.emailid,{
      name,
      address
    }).subscribe((newUser) => {
      // console.log(newUser);
      // this.router.navigateByUrl(this.returnUrl);
    })
  } 

}

