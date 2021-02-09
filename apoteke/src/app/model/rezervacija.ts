import { Korisnik } from "./korisnik";
import { Pregled } from "./pregled";



export class Rezervacija{
    constructor(
        public id: number,
        public pregled: Pregled,
        public pacijent: Korisnik
      
        
    ){}
}
