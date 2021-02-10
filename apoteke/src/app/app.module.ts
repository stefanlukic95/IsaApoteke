import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { Interceptor } from './login/core/interceptor';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenStorage } from './login/core/token.storage';
import { AuthService } from './login/core/auth.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { LoginUserService } from './login/login-user.service';
import { ApotekaComponent } from './apoteka/apoteka.component';
import { LekComponent } from './lek/lek.component';
import { KorisnikComponent } from './korisnik/korisnik.component';
import { UserComponent } from './user/user.component';
import { PregledComponent } from './pregled/pregled.component';
import { RezervacijaComponent } from './rezervacija/rezervacija.component';
import { SavetovanjeComponent } from './savetovanje/savetovanje.component';
import { LekRezervacijaComponent } from './lek-rezervacija/lek-rezervacija.component';
import { RegisterComponent } from './register/register.component';
import { KorisnikService } from './services/korisnik.service';
import { ApotekaService } from './services/apoteka.service';
import { LekService } from './services/lek.service';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { ApotekaEditComponent } from './apoteka/apoteka-edit/apoteka-edit.component';
import { CheckLoginService } from './nav-component/check-login.service';
import { LekEditComponent } from './lek/lek-edit/lek-edit.component';
import { PregledService } from './services/pregled.service';
import { RezervacijaService } from './services/rezervacija.service';
import { PregledEditComponent } from './pregled-edit/pregled-edit.component';
import { AkcijaComponent } from './akcija/akcija.component';
import { AkcijaService } from './services/akcija.service';
import { AkcijaEditComponent } from './akcija-edit/akcija-edit.component';
import { SavetovanjeService } from './services/savetovanje.service';
import { SavetovanjeEditComponent } from './savetovanje-edit/savetovanje-edit.component';
import { RezervacijaListComponent } from './rezervacija-list/rezervacija-list.component';
import { FarmaceutComponent } from './farmaceut/farmaceut.component';
import { DermatoloziComponent } from './dermatolozi/dermatolozi.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    NavComponentComponent,
    ApotekaComponent,
    LekComponent,
    KorisnikComponent,
    UserComponent,
    PregledComponent,
    RezervacijaComponent,
    SavetovanjeComponent,
    LekRezervacijaComponent,
    RegisterComponent,
    UserEditComponent,
    ApotekaEditComponent,
    LekEditComponent,
    PregledEditComponent,
    AkcijaComponent,
    AkcijaEditComponent,
    SavetovanjeEditComponent,
    RezervacijaListComponent,
    FarmaceutComponent,
    DermatoloziComponent,

 
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    

  ],
  providers: [
    LoginUserService,
    KorisnikService,
    TokenStorage,
    AuthService,
    ApotekaService,
    LekService,
    CheckLoginService,
    TokenStorage,
    AuthService,
    PregledService,
    RezervacijaService,
    AkcijaService,
    SavetovanjeService,

    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi : true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
