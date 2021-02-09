import { Component, OnInit , Input} from '@angular/core';
import { Pregled } from '../model/pregled';
import { NoviPregled } from '../model/novi-pregled';
import { PregledService } from '../services/pregled.service';
import { LoginUserService } from '../login/login-user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { NovaRezervacija } from '../model/nova-rezervacija';
import { RezervacijaService } from '../services/rezervacija.service';


@Component({
  selector: 'app-rezervacija',
  templateUrl: './rezervacija.component.html',
  styleUrls: ['./rezervacija.component.css']
})
export class RezervacijaComponent implements OnInit {

  @Input() preglediShow: Pregled;
  editFlag: boolean;
  pregledId: string;
  pregledEdit: Pregled;
  pregledi: Pregled[];
  selectKarta: Pregled;
  novaRezervacija: NovaRezervacija = new NovaRezervacija(null,null);
  pregled: Pregled;


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

    
    rezervisiPregled(pregled: Pregled) {
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
    if (this.route.snapshot.url[0].path === 'pregled-rez') {
      this.route.params.subscribe(
        (params: Params) => {
          this.pregledId = params['pregledId'];
        }
      );
    
      this.getPregled();
   } 
  }

}
