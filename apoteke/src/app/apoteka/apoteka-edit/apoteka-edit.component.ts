import { Component, OnInit } from '@angular/core';
import { ApotekaService } from '../../services/apoteka.service';
import { KorisnikService } from '../../services/korisnik.service';
import { LekService } from '../../services/lek.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { NovaApoteka } from '../../model/nova-apoteka';
import { Apoteka } from '../../model/apoteka';
import { Korisnik } from '../../model/korisnik';
import { Lek } from '../../model/lek';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-apoteka-edit',
  templateUrl: './apoteka-edit.component.html',
  styleUrls: ['./apoteka-edit.component.css']
})
export class ApotekaEditComponent implements OnInit {

  novaApoteka: NovaApoteka = new NovaApoteka('','','',null,null,null,null,null,null,null);
  apotekaShow: Apoteka;
  apotekaId: string;
  apotekaEdit: Apoteka;
  apoteke: Apoteka[];
  dermatolozi: Korisnik[];
  farmaceuti: Korisnik[];
  dermatolog: Korisnik;
  farmaceut: Korisnik;
  lek: Lek;
  lekovi: Lek[];
  korisnici: Korisnik[];
 




  novaApotekaSubmit(forma: NgForm) {
    this.novaApoteka.naziv = forma.value.naziv;
    this.novaApoteka.adresa = forma.value.adresa;
    this.novaApoteka.opis = forma.value.opis;
    this.novaApoteka.dermatolozi = this.dermatolozi;
    this.novaApoteka.farmaceuti = this.farmaceuti;
    this.novaApoteka.lekovi = this.lekovi;
   

    this.apotekaService.insertApoteka(this.novaApoteka).subscribe();
    forma.reset();
    this.location.back();
  }





  apotekaEdt() {
    this.apotekaService.updateApoteka(this.apotekaEdit).subscribe();
    this.location.back();
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
 




  getApoteka() {
    this.apotekaService.getApoteka(this.apotekaId).subscribe(
      (apoteka) => this.apotekaEdit = apoteka
    );
  }


  getLekovi(): void {
    this.lekService.getLekovi()
      .subscribe(lekovi => this.lekovi = lekovi);
     

  }
  
  
  constructor(private apotekaService: ApotekaService,
              private korisnikService: KorisnikService,
              private lekService: LekService,
              private location: Location, 
              private route: ActivatedRoute) { }

          


  ngOnInit() {

    if (this.route.snapshot.url[0].path === 'apoteka') {
      this.route.params.subscribe(
        (params: Params) => {
          this.apotekaId = params['apotekaId'];
        }
      );
      this.getApoteka();
      this.getDermatolozi();
      this.getFarmaceuti();
    }
  }
}



