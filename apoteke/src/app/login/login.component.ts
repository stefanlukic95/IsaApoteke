import { Component, OnInit } from '@angular/core';
import { LoginUserService } from './login-user.service';
import { TokenStorage } from './core/token.storage';
import { AuthService } from './core/auth.service';
import { Router } from '@angular/router';
import { LoggedInUser } from '../model/logged-in-user';
import { CheckLoginService } from '../nav-component/check-login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService, private token: TokenStorage,
    private loginUserService: LoginUserService, private checkLoginService: CheckLoginService) { }

  username: string;
  password: string;
  user: LoggedInUser;

  login(): void {
    this.authService.attemptAuth(this.username, this.password).subscribe(
      data => {
        this.token.saveToken(data.token);
        this.router.navigate(['user']);
        this.checkLoginService.toggle();
        window.location.reload();
      }
    );
  }

}