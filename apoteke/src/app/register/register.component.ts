import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoviKorisnik } from '../model/novi-korisnik';
import { KorisnikService } from '../services/korisnik.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  korisnik = new NoviKorisnik('', '', '', null,'',null,null,null);
  confirmPassword = '';
  constructor(private korisniciService: KorisnikService, private router: Router) {

  }

  ngOnInit() {

  }

  registruj() {
    this.korisniciService.insertKorisnik(this.korisnik).subscribe();
    this.router.navigate(['login']);
  }

}
