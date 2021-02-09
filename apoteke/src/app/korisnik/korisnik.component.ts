import { Component, OnInit, Input } from '@angular/core';
import { Korisnik } from '../model/korisnik';
import { KorisnikService } from '../services/korisnik.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-korisnik',
  templateUrl: './korisnik.component.html',
  styleUrls: ['./korisnik.component.css']
})
export class KorisnikComponent implements OnInit {
  @Input() korisnikShow: Korisnik;

 
  editFlag: boolean;
  korisnikId: string;
  korisnikEdit : Korisnik;
  korisnici: Korisnik[];


  getKorisnici(): void {
    this.korisnikService.getKorisnici()
      .subscribe(korisnici => this.korisnici = korisnici);
     

  }
  
    getKorisnik() {
      this.korisnikService.getKorisnik(this.korisnikId).subscribe(
        (korisnik) => this.korisnikEdit = korisnik
      );
    }


    deleteKorisnik(korisnik: Korisnik) {
      this.korisnikService.deleteKorisnik(korisnik).subscribe();
      this.korisnici = this.korisnici.filter(s => s !== korisnik);
    }

  constructor(private korisnikService: KorisnikService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.getKorisnici();
  }
}

