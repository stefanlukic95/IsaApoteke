import { Korisnik } from "./korisnik";
import { Lek } from "./lek";



export class LekRezervacija{
    constructor(
        public id: number,
        public lek: Lek,
        public pacijent: Korisnik,
        public datum_vreme: Date,
      
        
    ){}
}
