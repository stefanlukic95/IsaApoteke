import { Component, OnInit , Input} from '@angular/core';
import { LoginUserService } from '../login/login-user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { NovaRezervacija } from '../model/nova-rezervacija';
import { RezervacijaService } from '../services/rezervacija.service';
import { Rezervacija } from '../model/rezervacija';

@Component({
  selector: 'app-rezervacija-list',
  templateUrl: './rezervacija-list.component.html',
  styleUrls: ['./rezervacija-list.component.css']
})
export class RezervacijaListComponent implements OnInit {

  @Input() rezervazijeShow: Rezervacija;
  editFlag: boolean;
  rezervacijaId: string;
  rezervacijaEdit: Rezervacija;
  rezervacije: Rezervacija[];
  selectRezervacija: Rezervacija;
  novaRezervacija: NovaRezervacija = new NovaRezervacija(null,null);
  rezervacija: Rezervacija;


  getRezervacije(): void {
    this.rezervacijaService.getRezervacije()
      .subscribe(rezervacije => this.rezervacije = rezervacije);
  }
  
    getRezervacija() {
      this.rezervacijaService.getRezervacija(this.rezervacijaId).subscribe(
        (rezervacija) => this.rezervacijaEdit = rezervacija
      );
    }



    deleteRezervacija(rezervacija: Rezervacija) {
      this.rezervacijaService.deleteRezervacija(rezervacija).subscribe();
      this.rezervacije = this.rezervacije.filter(s => s !== rezervacija);
    }

   

  constructor(
              private rezervacijaService:RezervacijaService,
              private loginUserService: LoginUserService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) { }

  ngOnInit() {
   this.getRezervacije();

  }
}
