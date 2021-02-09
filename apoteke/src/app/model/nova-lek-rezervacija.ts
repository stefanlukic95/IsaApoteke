import { Korisnik } from "./korisnik";
import { Lek } from "./lek";



export class NovaLekRezervacija{
    constructor(
      
        public lek: Lek,
        public pacijent: Korisnik,
        public datum_vreme: Date,
      
        
    ){}
}
