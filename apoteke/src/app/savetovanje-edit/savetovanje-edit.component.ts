import { Component, OnInit } from '@angular/core';
import { Savetovanje } from '../model/savetovanje';
import { NovoSavetovanje } from '../model/novo-savetovanje';
import { SavetovanjeService } from '../services/savetovanje.service';
import { LoginUserService } from '../login/login-user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Korisnik } from '../model/korisnik';
import { NgForm } from '@angular/forms';
import { KorisnikService } from '../services/korisnik.service';

@Component({
  selector: 'app-savetovanje-edit',
  templateUrl: './savetovanje-edit.component.html',
  styleUrls: ['./savetovanje-edit.component.css']
})
export class SavetovanjeEditComponent implements OnInit {
  editFlag: boolean;
  savetovanjeId: string;
  savetovanjeEdit: Savetovanje;
  savetovanja: Savetovanje[];
  selectSavetovanje: Savetovanje;
  novoSavetovanje: NovoSavetovanje = new NovoSavetovanje(null,null,true,null);
  savetovanje: Savetovanje;
  apotekaId: String;
  datum_vreme: '';
  farmaceutt: '';
  pretrazenaSavetovanja: Savetovanje;
  farmaceut: Korisnik;
  korisnici: Korisnik[];



  novoSavetovanjeSubmit(forma: NgForm) {
    this.novoSavetovanje.farmaceut = this.farmaceut;
    this.novoSavetovanje.datum_vreme = forma.value.datum_vreme;
    
    this.savetovanjeService.insertSavetovanje(this.novoSavetovanje,this.apotekaId).subscribe();
    forma.reset();
    this.location.back();
  }




  savetovanjeEdt() {
    this.savetovanjeService.updateSavetovanje(this.savetovanjeEdit).subscribe();
    this.location.back();
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
 

  savetovanjeSearch(): void {
    this.savetovanjeService.searchSavetovanjeByDateName(this.datum_vreme,this.farmaceutt).subscribe(
      data => this.pretrazenaSavetovanja = data
    );
  }

  constructor(private savetovanjeService: SavetovanjeService,
              private korisnikService: KorisnikService,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.url[0].path === 'savetovanje') {
      this.route.params.subscribe(
        (params: Params) => {
          this.savetovanjeId = params['savetovanjeId'];
        }
      );
      this.getSavetovanje();
    } else if (this.route.snapshot.url[0].path === 'savetovanja-edit') {
      this.route.params.subscribe(
        (params: Params) => {
          this.apotekaId = params['apotekaId'];
        }
      );
      this.getKorisnici();
    }

  }
}