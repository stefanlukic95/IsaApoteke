import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Narudzbenica } from '../model/narudzbenica';
import { NovaNarudzbenica } from '../model/nova-narudzbenica';
import { Lek } from '../model/lek';
import { NarudzbenicaService } from '../services/narudzbenica.service';
import { LekService } from '../services/lek.service';

@Component({
  selector: 'app-narudzbenica-edit',
  templateUrl: './narudzbenica-edit.component.html',
  styleUrls: ['./narudzbenica-edit.component.css']
})
export class NarudzbenicaEditComponent implements OnInit {

  novaNarudzbenica: NovaNarudzbenica = new NovaNarudzbenica(null,0,null);
  narudzbenicaId: string;
  narudzbenice: Narudzbenica[];
  narudzbenicaEdit: Narudzbenica;
  lekovi: Lek[];
  lek: Lek;
  apotekaId: String


  novaNarudzbenicaSubmit(forma: NgForm) {
    this.novaNarudzbenica.lek = this.lek;
    this.novaNarudzbenica.datum_vreme = forma.value.datum_vreme;
    this.novaNarudzbenica.kolicina = forma.value.kolicina;
    this.narudzbenicaService.insertNarudzbenica(this.novaNarudzbenica,this.apotekaId).subscribe();
    forma.reset();
    this.location.back();
  }

  narudzbenicaEdt() {
    this.narudzbenicaService.updateNarudzbenica(this.narudzbenicaEdit).subscribe();
    this.location.back();
  }

  getNarudzbenice(): void {
    this.narudzbenicaService.getNarudzbenice()
      .subscribe(narudzbenice => this.narudzbenice = narudzbenice);
  }
  
    getNarudzbenica() {
      this.narudzbenicaService.getNarudzbenica(this.narudzbenicaId).subscribe(
        (narudzbenica) => this.narudzbenicaEdit = narudzbenica
      );
    }


    getLekovi(): void {
      this.lekService.getLekovi()
        .subscribe(lekovi => this.lekovi = lekovi);
       
  
    }
 

  constructor(private narudzbenicaService: NarudzbenicaService,
              private lekService: LekService,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.url[0].path === 'narudzbenica') {
      this.route.params.subscribe(
        (params: Params) => {
          this.narudzbenicaId = params['narudzbenicaId'];
        }
      );
      this.getNarudzbenica();
    } else if (this.route.snapshot.url[0].path === 'narudzbenice-edit') {
      this.route.params.subscribe(
        (params: Params) => {
          this.apotekaId = params['apotekaId'];
        }
      );
      this.getLekovi();
    }

  }
}