import { Component, OnInit } from '@angular/core';
import { LoggedInUser } from '../../model/logged-in-user';
import { LoginUserService } from '../../login/login-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: LoggedInUser;

  constructor(private loginUserService: LoginUserService, private router: Router) { }

  getUser(): void {
    this.loginUserService.getUser().subscribe(
      data => {
        this.user = data;
      }
    );

  }

  update() {
   this.loginUserService.updateUser(this.user).subscribe();
    this.router.navigate(['user']); 
  }

  ngOnInit() {
    this.getUser();
  }

}
