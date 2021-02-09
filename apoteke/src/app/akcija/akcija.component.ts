import { Component, OnInit,Input } from '@angular/core';
import { AkcijaService } from '../services/akcija.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Akcija } from '../model/akcija';
import { Apoteka } from '../model/apoteka';
import { ApotekaService } from '../services/apoteka.service';


@Component({
  selector: 'app-akcija',
  templateUrl: './akcija.component.html',
  styleUrls: ['./akcija.component.css']
})
export class AkcijaComponent implements OnInit {

  @Input() akcijaShow: Akcija;

 
  editFlag: boolean;
  akcijaId: string;
  akcijaEdit : Akcija;
  akcije: Akcija[];
  apoteke: Apoteka[];
  naziv:'';

  apotekaId: String

  getAkcije(): void {
    this.akcijaService.getAkcije()
      .subscribe(akcije => this.akcije = akcije);
     

  }
  
    getAkcija() {
      this.akcijaService.getAkcija(this.akcijaId).subscribe(
        (akcija) => this.akcijaEdit = akcija
      );
    }


    deleteAkcija(akcija: Akcija) {
      this.akcijaService.deleteAkcija(akcija).subscribe();
      this.akcije = this.akcije.filter(s => s !== akcija);
    }



  getApoteke(): void {
    this.apotekaService.getApoteke()
      .subscribe(apoteke => this.apoteke = apoteke);
  }
  
  constructor(private akcijaService: AkcijaService,
              private route: ActivatedRoute,
              private apotekaService: ApotekaService,
              private router: Router) { }

  ngOnInit() {
      if (this.route.snapshot.params['apotekaId']) {
        this.route.params.subscribe(
          (params: Params) => {
            this.apotekaId = params['apotekaId'];
          }

        );
        this.getAkcije();

      }
    
    this.getAkcije();
    }
}
