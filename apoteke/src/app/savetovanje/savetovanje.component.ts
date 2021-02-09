import { Component, OnInit } from '@angular/core';
import { Savetovanje } from '../model/savetovanje';
import { NovoSavetovanje } from '../model/novo-savetovanje';
import { SavetovanjeService } from '../services/savetovanje.service';
import { LoginUserService } from '../login/login-user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { KorisnikService } from '../services/korisnik.service';
import { Korisnik } from '../model/korisnik';

@Component({
  selector: 'app-savetovanje',
  templateUrl: './savetovanje.component.html',
  styleUrls: ['./savetovanje.component.css']
})
export class SavetovanjeComponent implements OnInit {

  editFlag: boolean;
  savetovanjeId: string;
  savetovanjeEdit: Savetovanje;
  savetovanja: Savetovanje[];
  selectSavetovanje: Savetovanje;
  novoSavetovanje: NovoSavetovanje = new NovoSavetovanje(null,null,true);
  savetovanje: Savetovanje;
  apotekaId: String;
  datum_vreme: '';
  farmaceut: '';
  pretrazenaSavetovanja: Savetovanje;
  korisnici: Korisnik[];

  getSavetovanja(): void {
    this.savetovanjeService.getSavetovanja()
      .subscribe(savetovanja => this.savetovanja = savetovanja);
  }
  
    getSavetovanje() {
      this.savetovanjeService.getSavetovanje(this.savetovanjeId).subscribe(
        (savetovanje) => this.savetovanjeEdit = savetovanje
      );
    }


    getKorisnici(): void {
      this.korisnikService.getKorisnici()
        .subscribe(korisnici => this.korisnici = korisnici);
       
  
    }
   

    deleteSavetovanje(savetovanje: Savetovanje) {
      this.savetovanjeService.deleteSavetovanje(savetovanje).subscribe();
      this.savetovanja = this.savetovanja.filter(s => s !== savetovanje);
    }

    savetovanjeSearch(): void {
      this.savetovanjeService.searchSavetovanjeByDateName(this.datum_vreme,this.farmaceut).subscribe(
        data => this.pretrazenaSavetovanja = data
      );
    }

    

  constructor(private savetovanjeService: SavetovanjeService,
              private korisnikService: KorisnikService,
              private loginUserService: LoginUserService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) { }

  ngOnInit() {

    if (this.route.snapshot.params['apotekaId']) {
      this.route.params.subscribe(
        (params: Params) => {
          this.apotekaId = params['apotekaId'];
        }

      );
      this.getSavetovanja();
      this.getKorisnici();
    }
  
  this.getSavetovanja();
  this.getKorisnici();
  }
}