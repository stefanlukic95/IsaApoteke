import { Component, OnInit } from '@angular/core';
import { ApotekaService } from '../services/apoteka.service';
import { Apoteka } from '../model/apoteka';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { NovaAkcija } from '../model/nova-akcija';
import { Akcija } from '../model/akcija';
import { AkcijaService } from '../services/akcija.service';

@Component({
  selector: 'app-akcija-edit',
  templateUrl: './akcija-edit.component.html',
  styleUrls: ['./akcija-edit.component.css']
})
export class AkcijaEditComponent implements OnInit {

  novaAkcija: NovaAkcija = new NovaAkcija('','','');
  akcijaShow: Akcija;
  akcijaId: string;
  akcijaEdit: Akcija;
  akcije: Akcija[];
  apoteke: Apoteka[];
  apoteka: Apoteka;
  rezervisan: boolean;
  apotekaId: String
  

    novaAkcijaSubmit(forma: NgForm) {
    this.novaAkcija.naziv = forma.value.naziv;
    this.novaAkcija.period_vazenja = forma.value.period_vazenja;
    this.novaAkcija.pretplatnici = forma.value.pretplatnici;
    this.akcijaService.insertAkcija(this.novaAkcija,this.apotekaId).subscribe();
    forma.reset();
    this.location.back();
  }




  akcijaEdt() {
    this.akcijaService.updateAkcija(this.akcijaEdit).subscribe();
    this.location.back();
  }

  getAkcija() {
    this.akcijaService.getAkcija(this.akcijaId).subscribe(
      (akcija) => this.akcijaEdit = akcija
    );
  }

  getApoteke(): void {
    this.apotekaService.getApoteke()
      .subscribe(apoteke => this.apoteke = apoteke);
  }
  constructor(private apotekaService: ApotekaService,
             
              private akcijaService: AkcijaService,
              private location: Location, 
              private route: ActivatedRoute) { }

          


  ngOnInit() {

    if (this.route.snapshot.url[0].path === 'akcija') {
      this.route.params.subscribe(
        (params: Params) => {
          this.akcijaId = params['akcijaId'];
        }
      );
      this.getAkcija();
    } else if (this.route.snapshot.url[0].path === 'akcije') {
      this.route.params.subscribe(
        (params: Params) => {
          this.apotekaId = params['apotekaId'];
        }
      );
    }

  }

}
