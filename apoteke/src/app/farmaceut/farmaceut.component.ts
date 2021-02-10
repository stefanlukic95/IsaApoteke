import { Component, OnInit, Input } from '@angular/core';
import { Korisnik } from '../model/korisnik';
import { KorisnikService } from '../services/korisnik.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginUserService } from '../login/login-user.service';
import { LoggedInUser } from '../model/logged-in-user';
@Component({
  selector: 'app-farmaceut',
  templateUrl: './farmaceut.component.html',
  styleUrls: ['./farmaceut.component.css']
})
export class FarmaceutComponent implements OnInit {

  @Input() korisnikShow: Korisnik;

 
  editFlag: boolean;
  korisnikId: string;
  korisnikEdit : Korisnik;
  korisnici: Korisnik[];
  ime = '';
  prezime = '';
  pretrazeniKorisnici: LoggedInUser[];

  getKorisnici(): void {
    this.korisnikService.getKorisnici()
      .subscribe(korisnici => this.korisnici = korisnici);
     

  }
  
    getKorisnik() {
      this.korisnikService.getKorisnik(this.korisnikId).subscribe(
        (korisnik) => this.korisnikEdit = korisnik
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
 
    findUser(): void {
      this.loginUserService.getUserByname(this.ime, this.prezime).subscribe(
        data => this.pretrazeniKorisnici = data
      );
    }
  
    

    deleteKorisnik(korisnik: Korisnik) {
      this.korisnikService.deleteKorisnik(korisnik).subscribe();
      this.korisnici = this.korisnici.filter(s => s !== korisnik);
    }

  constructor(private korisnikService: KorisnikService,
              private loginUserService: LoginUserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.getFarmaceuti();
  }
}


