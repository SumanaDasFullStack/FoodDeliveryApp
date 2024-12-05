import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordsMatchValidator } from '../partials/password-match-validators';

@Component({
  selector: 'app-createnew-password',
  templateUrl: './createnew-password.component.html',
  styleUrls: ['./createnew-password.component.css']
})
export class CreatenewPasswordComponent implements OnInit{

  changePasswordForm = new FormGroup({
    currentPassword: new FormControl("", [Validators.required]),
    newPassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
    confirmPassword: new FormControl('', [Validators.required])
  }, {
    validators: [PasswordsMatchValidator('newPassword', 'confirmPassword')]
  })

  isSubmitted: boolean = false;
  // returnUrl = '';  // if needed in future

  constructor(private userService: LoginService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }

  changePassword() {
    this.isSubmitted = true;
    if (this.changePasswordForm.invalid) {
      return;
    }

    const currentPassword = this.changePasswordForm.value.currentPassword as string;
    const newPassword = this.changePasswordForm.value.newPassword as string;

    this.userService.changePassword(currentPassword, newPassword).subscribe(
      () => {
        this.changePasswordForm.reset();
        this.isSubmitted = false;
        // this.router.navigateByUrl(this.returnUrl);
      },
      (err) => {
        console.log(err);
      }

    );
  }
}
