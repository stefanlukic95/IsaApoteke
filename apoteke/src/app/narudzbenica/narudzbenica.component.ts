import { Component, OnInit } from '@angular/core';
import { Narudzbenica } from '../model/narudzbenica';
import { NovaNarudzbenica } from '../model/nova-narudzbenica';
import { LoginUserService } from '../login/login-user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { NarudzbenicaService } from '../services/narudzbenica.service';


@Component({
  selector: 'app-narudzbenica',
  templateUrl: './narudzbenica.component.html',
  styleUrls: ['./narudzbenica.component.css']
})
export class NarudzbenicaComponent implements OnInit {

  editFlag: boolean;
  narudzbenicaId: string;
  narudzbenicaEdit: Narudzbenica;
  narudzbenice: Narudzbenica[];
  novaNarudzbenica: NovaNarudzbenica = new NovaNarudzbenica(null,0,null);
  narudzbenica: Narudzbenica;
  apotekaId: String;

  getNarudzbenice(): void {
    this.narudzbenicaService.getNarudzbenice()
      .subscribe(narudzbenice => this.narudzbenice = narudzbenice);
  }
  
    getNarudzbenica() {
      this.narudzbenicaService.getNarudzbenica(this.narudzbenicaId).subscribe(
        (narudzbenica) => this.narudzbenicaEdit = narudzbenica
      );
    }

  

    deleteNarudzbenica(narudzbenica: Narudzbenica) {
      this.narudzbenicaService.deleteNarudzbenica(narudzbenica).subscribe();
      this.narudzbenice = this.narudzbenice.filter(s => s !== narudzbenica);
    }
   

  constructor(private narudzbenicaService: NarudzbenicaService,
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
      this.getNarudzbenice();

    }
  
  this.getNarudzbenice();
  }

}
