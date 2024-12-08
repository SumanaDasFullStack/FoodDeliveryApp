import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-users-edit-page',
  templateUrl: './admin-users-edit-page.component.html',
  styleUrls: ['./admin-users-edit-page.component.css']
})
export class AdminUsersEditPageComponent {

  isEditMode!: boolean;
  userId!: string;

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    emailid: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required, Validators.minLength(5)]),
    isAdmin: new FormControl<boolean>(false)
  })

  isSubmitted: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: LoginService,
    private toastrService: ToastrService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      this.userId =params['emailid'];
      console.log("value of userid "+this.userId);
      this.isEditMode = !!this.userId;
      if (this.isEditMode) {
        this.userService.getById(this.userId).subscribe((user) => {
          this.userForm.patchValue(user);
        })
      }
    })
  }

  submit() {
    this.isSubmitted = true;
    if (this.userForm.invalid) {
      return;
    }

    if (this.isEditMode) {
      this.userService.updateUser(this.userId, this.userForm.value).subscribe(() => {
        this.toastrService.success('User updated successfully!');
        this.router.navigate(['/admin/users']);
      })
    }
    else {
      console.log("button not in edit mode");
    }

  }
}

