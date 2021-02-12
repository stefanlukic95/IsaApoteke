import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { KorisnikComponent } from '../korisnik/korisnik.component';
import { ApotekaComponent } from '../apoteka/apoteka.component';
import { LekComponent } from '../lek/lek.component';
import { UserComponent } from '../user/user.component';
import { UserEditComponent } from '../user/user-edit/user-edit.component';
import { ApotekaEditComponent } from '../apoteka/apoteka-edit/apoteka-edit.component';
import { RegisterComponent } from '../register/register.component';
import { LekEditComponent } from '../lek/lek-edit/lek-edit.component';
import { LekRezervacijaComponent } from '../lek-rezervacija/lek-rezervacija.component';
import { PregledComponent } from '../pregled/pregled.component';
import { PregledEditComponent } from '../pregled-edit/pregled-edit.component';
import { RezervacijaComponent } from '../rezervacija/rezervacija.component';
import { AkcijaComponent } from '../akcija/akcija.component';
import { AkcijaEditComponent } from '../akcija-edit/akcija-edit.component';
import { SavetovanjeComponent } from '../savetovanje/savetovanje.component';
import { SavetovanjeEditComponent } from '../savetovanje-edit/savetovanje-edit.component';
import { RezervacijaListComponent } from '../rezervacija-list/rezervacija-list.component';
import { FarmaceutComponent } from '../farmaceut/farmaceut.component';
import { DermatoloziComponent } from '../dermatolozi/dermatolozi.component';
import { NarudzbenicaComponent } from '../narudzbenica/narudzbenica.component';
import { NarudzbenicaEditComponent } from '../narudzbenica-edit/narudzbenica-edit.component';
import { GodisnjiOdmorComponent } from '../godisnji-odmor/godisnji-odmor.component';
import { GodisnjiOdmorEditComponent } from '../godisnji-odmor-edit/godisnji-odmor-edit.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'korisnici', component: KorisnikComponent},
  { path: 'apoteke', component: ApotekaComponent},
  { path: 'apoteka/:apotekaId', component : ApotekaEditComponent },
  {path: 'apoteka-edit', component: ApotekaEditComponent},
  { path: 'lekovi', component: LekComponent},
  {path: 'lekovi/apoteke/:apotekaId', component: LekComponent},
  {path: 'akcije/apoteke/:apotekaId', component: AkcijaEditComponent},
  {path: 'pregledi/apoteke/:apotekaId', component: PregledComponent},  
  {path: 'narudzbenice/apoteke/:apotekaId', component: NarudzbenicaComponent},
  {path: 'savetovanja/apoteke/:apotekaId', component: SavetovanjeComponent},
  { path: 'savetovanja-edit/:apotekaId', component: SavetovanjeEditComponent },
  { path: 'akcije', component : AkcijaComponent },
  { path: 'lek/:lekId', component : LekEditComponent },
  { path: 'narudzbenica/:narudzbenicaId', component: NarudzbenicaEditComponent },
  { path: 'lekovi-edit/:apotekaId', component : LekEditComponent },
  { path: 'user', component: UserComponent},
  { path: 'user/edit-user', component: UserEditComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'lek-rez/:lekId', component: LekRezervacijaComponent},
  { path: 'pregledi', component: PregledComponent },
  { path: 'pregledi-edit/:apotekaId', component: PregledEditComponent },
  { path: 'narudzbenice-edit/:apotekaId', component: NarudzbenicaEditComponent },
  { path: 'pregled-rez/:pregledId', component: RezervacijaComponent},
  { path: 'savetovanje', component: SavetovanjeComponent},
  { path: 'rezervacije', component: RezervacijaListComponent},
  {path: 'farmaceuti', component: FarmaceutComponent},
  {path: 'dermatolozi', component : DermatoloziComponent},
  {path: 'godisnjiOdmori', component : GodisnjiOdmorComponent},
  {path: 'godisnjiOdmor-edit', component : GodisnjiOdmorEditComponent},
  {path: 'godisnjiOdmor/:godisnjiOdmorId', component: GodisnjiOdmorEditComponent },


 
]


@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  declarations: []
})
export class AppRoutingModule { }
