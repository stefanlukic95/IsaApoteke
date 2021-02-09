import { Component, OnInit } from '@angular/core';
import { NoviPregled } from '../model/novi-pregled';
import { Pregled } from '../model/pregled';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { PregledService } from '../services/pregled.service';
import { NgForm } from '@angular/forms';
import { Korisnik } from '../model/korisnik';
import { KorisnikService } from '../services/korisnik.service';


@Component({
  selector: 'app-pregled-edit',
  templateUrl: './pregled-edit.component.html',
  styleUrls: ['./pregled-edit.component.css']
})
export class PregledEditComponent implements OnInit {

  noviPregled: NoviPregled = new NoviPregled(null,null,0,false);
  pregledId: string;
  pregledi: Pregled[];
  pregledEdit: Pregled;
  dermatolog: Korisnik;
  korisnici: Korisnik[];
  apotekaId: String

  noviPregledSubmit(forma: NgForm) {
    this.noviPregled.dermatolog = this.dermatolog;
    this.noviPregled.datum_vreme = forma.value.datum_vreme;
    this.noviPregled.cena = forma.value.cena;
    this.pregledService.insertPregled(this.noviPregled,this.apotekaId).subscribe();
    forma.reset();
    this.location.back();
  }



  pregledUpdtSubmit(forma: NgForm){
    this.pregledEdit.dermatolog = this.dermatolog;
    this.pregledEdit.datum_vreme = forma.value.datum_vreme;
    this.pregledEdit.cena = forma.value.cena;
    this.pregledService.updatePregled(this.pregledEdit).subscribe();
    forma.reset();
    this.location.back();
  }

  pregledEdt() {
    this.pregledService.updatePregled(this.pregledEdit).subscribe();
    this.location.back();
  }


  getPregled() {
    this.pregledService.getPregled(this.pregledId).subscribe(
      (pregled) => this.pregledEdit = pregled
    );
  }

  getKorisnici(): void {
    this.korisnikService.getKorisnici()
      .subscribe(korisnici => this.korisnici = korisnici);
     

  }
 

  constructor(private pregledService: PregledService,
              private korisnikService: KorisnikService,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.url[0].path === 'pregled') {
      this.route.params.subscribe(
        (params: Params) => {
          this.pregledId = params['pregledId'];
        }
      );
      this.getPregled();
    } else if (this.route.snapshot.url[0].path === 'pregledi-edit') {
      this.route.params.subscribe(
        (params: Params) => {
          this.apotekaId = params['apotekaId'];
        }
      );
      this.getKorisnici();
    }

  }
}