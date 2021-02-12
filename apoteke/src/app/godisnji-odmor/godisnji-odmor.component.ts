import { Component, OnInit } from '@angular/core';
import { GodisnjiOdmor } from '../model/godisnji-odmor';
import { NoviGodisnjiOdmor } from '../model/novi-godisnji-odmor';
import { GodisnjiOdmorService } from '../services/godisnji-odmor.service';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-godisnji-odmor',
  templateUrl: './godisnji-odmor.component.html',
  styleUrls: ['./godisnji-odmor.component.css']
})
export class GodisnjiOdmorComponent implements OnInit {

  editFlag: boolean;
  godisnjiOdmorId: string;
  godisnjiOdmorEdit: GodisnjiOdmor;
  godisnjiOdmori: GodisnjiOdmor[];
  noviGodisnjiOdmor: NoviGodisnjiOdmor = new NoviGodisnjiOdmor(null,null,null,null);
  godisnjiOdmor: GodisnjiOdmor;
  apotekaId: String;

  getGodisnjiOdmori(): void {
    this.godisnjiOdmorService.getGodisnjiOdmori()
      .subscribe(godisnjiOdmori => this.godisnjiOdmori = godisnjiOdmori);
  }
  
    getGodisnjiOdmor() {
      this.godisnjiOdmorService.getGodisnjiOdmor(this.godisnjiOdmorId).subscribe(
        (godisnjiOdmor) => this.godisnjiOdmorEdit = godisnjiOdmor
      );
    }

  

    deleteGodisnjiOdmor(godisnjiOdmor: GodisnjiOdmor) {
      this.godisnjiOdmorService.deleteGodisnjiOdmor(godisnjiOdmor).subscribe();
      this.godisnjiOdmori = this.godisnjiOdmori.filter(s => s !== godisnjiOdmor);
    }
   

  constructor(private godisnjiOdmorService: GodisnjiOdmorService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  
  this.getGodisnjiOdmori();
  }

}
