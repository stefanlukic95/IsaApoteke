import { Injectable, Output, EventEmitter } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
@Injectable()
export class CheckLoginService {

  loggedIn: boolean;
  @Output() change: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  getLoggedIn(): boolean {
    return this.loggedIn;
  }

  toggle() {
    if (sessionStorage.getItem(TOKEN_KEY) != null) {
      this.loggedIn = true;
      this.change.emit(this.loggedIn);
    } else {
      this.loggedIn = false;
      this.change.emit(this.loggedIn);
    }
  }

}
