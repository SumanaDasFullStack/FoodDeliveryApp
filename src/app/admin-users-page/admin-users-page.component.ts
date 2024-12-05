import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';
import { Login } from '../login';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-users-page',
  templateUrl: './admin-users-page.component.html',
  styleUrls: ['./admin-users-page.component.css']
})
export class AdminUsersPageComponent {
  users!: Login[]; // Declare a property to hold the list of users
  searchtext:string =' ';

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: LoginService,
    private toastrService: ToastrService
  ) {
    // Subscribe to the activated route params to get the search term
    this.activatedRoute.params.subscribe((params) => {
      // Call the service to get the users based on the search term
      
      const param = params['searchTerm'];
      this.searchtext = param ? param : '';  // Set to an empty string if null
      console.log(this.searchtext);
   
      this.userService.getAllSearch(this.searchtext).subscribe((users) => {
        // Assign the fetched users to the component property
        this.users = users;
      });
   
    });
  }

  // Method to handle the block/unblock toggle for a user
  handleToggleBlock(userId: string) {
    // Call the UserService method to toggle block status for the specified user
    this.userService.toggleBlock(userId).subscribe({
      next: (isBlocked) => {
        // Find the user in the list of users and update the block status locally in the component
        const user = this.users.find((u) => u.emailid === userId)!;
        if (user) {
         // user.isBlocked = isBlocked;
        }
      },
      error: (err: { error: string | undefined; }) => {
        // Display an error message using ToastrService if there's an error
        this.toastrService.error(err.error);
        console.log(err.error);
      },
    });
  }
}

