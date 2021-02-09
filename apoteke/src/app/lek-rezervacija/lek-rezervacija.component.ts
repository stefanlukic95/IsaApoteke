import { Component, OnInit,Input} from '@angular/core';
import { LekService } from '../services/lek.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { LekRezervacija } from '../model/lek-rezervacija';
import { LoginUserService } from '../login/login-user.service';
import { Lek } from '../model/lek';
import { NovaLekRezervacija } from '../model/nova-lek-rezervacija'
import { Location } from '@angular/common';


@Component({
  selector: 'app-lek-rezervacija',
  templateUrl: './lek-rezervacija.component.html',
  styleUrls: ['./lek-rezervacija.component.css']
})
export class LekRezervacijaComponent implements OnInit {


@Input() lekShow: Lek;
lekId: string;
lekovi: Lek[];
novaLekRezervacija: NovaLekRezervacija = new NovaLekRezervacija(null,null,null);
lekEdit: Lek;

  rezervacijaLeka(lekRez: Lek) {
    this.lekService.createRezervacija(this.lekId,this.novaLekRezervacija).subscribe();
    this.location.back();
  }

   
  getLek() {
    this.lekService.getLek(this.lekId).subscribe(
      (lek) => this.lekEdit = lek
    );
  }


  constructor(private lekService: LekService,
             private location: Location,
               private router: Router,
               private route: ActivatedRoute,
               private loginUserService: LoginUserService
              ) { }

  ngOnInit() {
    if (this.route.snapshot.url[0].path === 'lek-rez') {
      this.route.params.subscribe(
        (params: Params) => {
          this.lekId = params['lekId'];
        }
      );
    
      this.getLek();
   } 
  }

}
