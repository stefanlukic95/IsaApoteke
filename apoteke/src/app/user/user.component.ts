import { Component, OnInit, Input } from '@angular/core';
import { LoggedInUser } from '../model/logged-in-user';
import { Korisnik } from '../model/korisnik';
import { LoginUserService } from '../login/login-user.service';
import { ApotekaService } from '../services/apoteka.service';
import { KorisnikService } from '../services/korisnik.service';
import { Lek } from '../model/lek';
import { LekService } from '../services/lek.service';

const TOKEN_KEY = 'AuthToken';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() userShow: LoggedInUser;
  @Input() completedParam;

  user: LoggedInUser;
  isAdmin: boolean;
  ime = '';
  prezime = '';
  prosecnaOcena = 0;
  pretrazeniKorisnici: LoggedInUser[];
  lekovi: Lek[];
  lek: Lek;
  korisnici: Korisnik[];


  constructor(private loginUserService: LoginUserService,
    private lekService: LekService,
    private korisnikService: KorisnikService) { }

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

  getDermatolozi(): void {
    this.korisnikService.getKorisnici()
      .subscribe(korisnici => {this.korisnici = korisnici;
        this.korisnici = this.korisnici.filter(s => s.roles[0] === "DERMATOLOG");
      
      }); 

  }

  getFarmaceuti(): void {
    this.korisnikService.getKorisnici()
      .subscribe(korisnici => {this.korisnici = korisnici;
        this.korisnici = this.korisnici.filter(s => s.roles[0] === "FARMACEUT");
      
      }); 

  }
 
  getPacijenti(): void {
    this.korisnikService.getKorisnici()
      .subscribe(korisnici => {this.korisnici = korisnici;
        this.korisnici = this.korisnici.filter(s => s.roles[0] === "PACIJENT");
      
      }); 

  }
 

  findUser(): void {
    this.loginUserService.getUserByname(this.ime, this.prezime).subscribe(
      data => this.pretrazeniKorisnici = data
    );
  }


  getLekovi(): void {
    this.lekService.getLekovi()
      .subscribe(lekovi => this.lekovi = lekovi);
  }



  ngOnInit() {
    
     this.getUser();
      
     this.getFarmaceuti();
     this.getDermatolozi();
     this.getPacijenti();
     this.getLekovi();
    
  }
}
