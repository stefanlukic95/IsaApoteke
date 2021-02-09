import { Component, OnInit } from '@angular/core';
import { Pregled } from '../model/pregled';
import { NoviPregled } from '../model/novi-pregled';
import { PregledService } from '../services/pregled.service';
import { LoginUserService } from '../login/login-user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { NovaRezervacija } from '../model/nova-rezervacija';
import { RezervacijaService } from '../services/rezervacija.service';


@Component({
  selector: 'app-pregled',
  templateUrl: './pregled.component.html',
  styleUrls: ['./pregled.component.css']
})
export class PregledComponent implements OnInit {

  editFlag: boolean;
  pregledId: string;
  pregledEdit: Pregled;
  pregledi: Pregled[];
  selectPregled: Pregled;
  novaRezervacija: NovaRezervacija = new NovaRezervacija(null,null);
  pregled: Pregled;
  apotekaId: String;

  getPregledi(): void {
    this.pregledService.getPregledi()
      .subscribe(pregledi => this.pregledi = pregledi);
  }
  
    getPregled() {
      this.pregledService.getPregled(this.pregledId).subscribe(
        (pregled) => this.pregledEdit = pregled
      );
    }



    deletePregled(pregled: Pregled) {
      this.pregledService.deletePregled(pregled).subscribe();
      this.pregledi = this.pregledi.filter(s => s !== pregled);
    }

    
    rezervisiPregled() {
      this.rezervacijaService.insertRezervacija(this.pregledId,this.novaRezervacija).subscribe();
      this.location.back();
    }

   

  constructor(private pregledService: PregledService,
              private rezervacijaService:RezervacijaService,
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
      this.getPregledi();

    }
  
  this.getPregledi();
  }

}
