import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { GodisnjiOdmorService } from '../services/godisnji-odmor.service';
import { NoviGodisnjiOdmor } from '../model/novi-godisnji-odmor';
import { GodisnjiOdmor } from '../model/godisnji-odmor';
import { Location } from '@angular/common';


@Component({
  selector: 'app-godisnji-odmor-edit',
  templateUrl: './godisnji-odmor-edit.component.html',
  styleUrls: ['./godisnji-odmor-edit.component.css']
})
export class GodisnjiOdmorEditComponent implements OnInit {

  noviGodisnjiOdmor: NoviGodisnjiOdmor = new NoviGodisnjiOdmor('',null,null,false);
  godisnjiOdmorId: string;
  godisnjiOdmori: GodisnjiOdmor[];
  godisnjOdmor: GodisnjiOdmor;
  godisnjiOdmorEdit: GodisnjiOdmor;


  noviGodisnjiOdmorSubmit(forma: NgForm) {
    this.noviGodisnjiOdmor.termin_od = forma.value.termin_od;
    this.noviGodisnjiOdmor.termin_do = forma.value.termin_do;
    this.godisnjiOdmorService.insertGodisnjiOdmor(this.noviGodisnjiOdmor).subscribe();
    forma.reset();
    this.location.back();
  }

  godnjiOdmorUpdateSubmit(forma: NgForm){
    this.godisnjiOdmorEdit.odobren = forma.value.odobren;
    this.godisnjiOdmorService.updateGodisnjiOdmor(this.godisnjiOdmorEdit).subscribe();
    forma.reset();
    this.location.back();
  }



  godisnjiOdmorEdt() {
    this.godisnjiOdmorService.updateGodisnjiOdmor(this.godisnjiOdmorEdit).subscribe();
    this.location.back();
  }

  getGodisnjiOdmori(): void {
    this.godisnjiOdmorService.getGodisnjiOdmori()
      .subscribe(godisnjiOdmori => this.godisnjiOdmori = godisnjiOdmori);
  }
  
    getGodisnjiOdmor() {
      this.godisnjiOdmorService.getGodisnjiOdmor(this.godisnjiOdmorId).subscribe(
        (godisnjiOdmor) => this.godisnjiOdmorEdit = godisnjiOdmor
      );
    }

  constructor(private godisnjiOdmorService: GodisnjiOdmorService,

              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.url[0].path === 'godisnjiOdmor') {
      this.route.params.subscribe(
        (params: Params) => {
          this.godisnjiOdmorId = params['godisnjiOdmorId'];
        }
      );
      this.getGodisnjiOdmor();
    }
  }


}
