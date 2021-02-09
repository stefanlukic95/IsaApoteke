import { Korisnik } from "./korisnik";
import { Pregled } from "./pregled";



export class NovaRezervacija{
    constructor(
    
        public pregled: Pregled,
        public pacijent: Korisnik
      
        
    ){}
}
