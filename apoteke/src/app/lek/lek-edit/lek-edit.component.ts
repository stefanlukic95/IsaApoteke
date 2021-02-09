import { Component, OnInit } from '@angular/core';
import { NoviLek } from '../../model/novi-lek';
import { Lek } from '../../model/lek';
import { ApotekaService } from '../../services/apoteka.service';
import { Apoteka } from '../../model/apoteka';
import { ActivatedRoute, Params } from '@angular/router';
import { LekService } from '../../services/lek.service';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-lek-edit',
  templateUrl: './lek-edit.component.html',
  styleUrls: ['./lek-edit.component.css']
})
export class LekEditComponent implements OnInit {

  noviLek: NoviLek = new NoviLek('',0,null,null);
  lekShow: Lek;
  lekId: string;
  lekEdit: Lek;
  lekovi: Lek[];
  apoteke: Apoteka[];
  apoteka: Apoteka;
  rezervisan: boolean;
  apotekaId: String
  

    noviLekSubmit(forma: NgForm) {
    this.noviLek.naziv = forma.value.naziv;
    this.noviLek.cena = forma.value.cena;
    this.noviLek.rezervisan = this.rezervisan;
    this.lekService.insertLek(this.noviLek,this.apotekaId).subscribe();
    forma.reset();
    this.location.back();
  }




  lekEdt() {
    this.lekService.updateLek(this.lekEdit).subscribe();
    this.location.back();
  }

  getLek() {
    this.lekService.getLek(this.lekId).subscribe(
      (lek) => this.lekEdit = lek
    );
  }

  getApoteke(): void {
    this.apotekaService.getApoteke()
      .subscribe(apoteke => this.apoteke = apoteke);
  }
  constructor(private apotekaService: ApotekaService,
             
              private lekService: LekService,
              private location: Location, 
              private route: ActivatedRoute) { }

          


  ngOnInit() {

    if (this.route.snapshot.url[0].path === 'lek') {
      this.route.params.subscribe(
        (params: Params) => {
          this.lekId = params['lekId'];
        }
      );
      this.getLek();
    } else if (this.route.snapshot.url[0].path === 'lekovi-edit') {
      this.route.params.subscribe(
        (params: Params) => {
          this.apotekaId = params['apotekaId'];
        }
      );
    }

  }

}
