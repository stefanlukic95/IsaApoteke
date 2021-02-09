import { Component, OnInit } from '@angular/core';
import { LoggedInUser } from '../model/logged-in-user';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { CheckLoginService } from './check-login.service';
import { LoginUserService } from '../login/login-user.service';

const TOKEN_KEY = 'AuthToken';



@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.css']
})
export class NavComponentComponent implements OnInit {
  isLoggedIn: boolean;
  user: LoggedInUser;
  numberOfRequests = '';
  isAdmin: boolean;


  constructor(private router: Router, 
    private checkloginService: CheckLoginService,
    private location: Location,
    private loginUserService: LoginUserService
  ) { }
  
  getUser(): void {
    this.loginUserService.getUser().subscribe(
      data => {
        this.user = data;
        console.log(this.user);
        console.log(this.user.roles);
        if (this.user.roles.includes('ADMINISTRATOR')) {
          this.isAdmin = true;
        }
      }
    );

  }

  logout(): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.clear();
    this.router.navigate(['login']);
    this.checkloginService.toggle();
  }


  ngOnInit() {
    if (sessionStorage.getItem(TOKEN_KEY) != null) {
      this.getUser();
      this.isLoggedIn = true;

    }
    this.checkloginService.change.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
      
    });
    console.log(this.isLoggedIn);
  }

  }

  

