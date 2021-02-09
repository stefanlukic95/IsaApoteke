import { Component, OnInit, Input } from '@angular/core';
import { Apoteka } from '../model/apoteka';
import { NovaApoteka } from '../model/nova-apoteka';
import { Korisnik } from '../model/korisnik';
import { ApotekaService } from '../services/apoteka.service';
import { KorisnikService } from '../services/korisnik.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-apoteka',
  templateUrl: './apoteka.component.html',
  styleUrls: ['./apoteka.component.css']
})
export class ApotekaComponent implements OnInit {

  @Input() apotekeShow: Apoteka;
  editFlag: boolean;
  apotekaId: string;
  apotekaEdit : Apoteka;
  apoteke: Apoteka[];
  selectApoteka: Apoteka;
  novaApoteka: NovaApoteka = new NovaApoteka('','','',null,null,null,null,null,null,null);
  dermatoloziShow: Apoteka;
  dermatolozi: Korisnik[];
  datum_vreme: '';
  apoteka: Apoteka;
  naziv:'';
  adresa:'';
  pretrazeneApotekeNaziv:Apoteka[];
  pretrazeneApotekeAdresa:Apoteka[];





  getApoteke(): void {
    this.apotekaService.getApoteke()
      .subscribe(apoteke => this.apoteke = apoteke);
  }
  
    getApoteka() {
      this.apotekaService.getApoteka(this.apotekaId).subscribe(
        (apoteka) => this.apotekaEdit = apoteka
      );
    }

    

    deleteApoteka(apoteka: Apoteka) {
      this.apotekaService.deleteApoteka(apoteka).subscribe();
      this.apoteke = this.apoteke.filter(s => s !== apoteka);
    }

    
   
  
    searchNaziv(): void {
      this.apotekaService.searchByNazivApoteke(this.naziv).subscribe(
        data => this.pretrazeneApotekeNaziv = data
      );
    }


    searchAdresa(): void {
      this.apotekaService.searchByAdresaApoteke(this.adresa).subscribe(
        data => this.pretrazeneApotekeAdresa = data
      );
    }
  
  constructor(private apotekaService: ApotekaService,
              private korisnikService: KorisnikService,
              private route: ActivatedRoute,
              private router: Router,
             ) { }

  ngOnInit() {
  this.getApoteke();
  
    
  }

}
