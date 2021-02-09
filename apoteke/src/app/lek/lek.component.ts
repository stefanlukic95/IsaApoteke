import { Component, OnInit,Input} from '@angular/core';
import { Lek } from '../model/lek';
import { LekService } from '../services/lek.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ApotekaService } from '../services/apoteka.service';
import { Apoteka } from '../model/apoteka';



@Component({
  selector: 'app-lek',
  templateUrl: './lek.component.html',
  styleUrls: ['./lek.component.css']
})
export class LekComponent implements OnInit {

  @Input() lekShow: Lek;

 
  editFlag: boolean;
  lekId: string;
  lekEdit : Lek;
  lekovi: Lek[];
  apoteke: Apoteka[];
  naziv:'';
  pretrazeniLekovi: Lek[];
  apotekaId: String

  getLekovi(): void {
    this.lekService.getLekovi()
      .subscribe(lekovi => this.lekovi = lekovi);
     

  }
  
    getLek() {
      this.lekService.getLek(this.lekId).subscribe(
        (lek) => this.lekEdit = lek
      );
    }


    deleteLek(lek: Lek) {
      this.lekService.deleteLek(lek).subscribe();
      this.lekovi = this.lekovi.filter(s => s !== lek);
    }



  getApoteke(): void {
    this.apotekaService.getApoteke()
      .subscribe(apoteke => this.apoteke = apoteke);
  }
  

  searchNaziv(): void {
    this.lekService.searchByNazivLeka(this.naziv).subscribe(
      data => this.pretrazeniLekovi = data
    );
  }

  constructor(private lekService: LekService,
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
        this.getLekovi();

      }
    
    this.getLekovi();
    }
}
