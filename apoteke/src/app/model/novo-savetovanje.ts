
import { Korisnik } from "./korisnik";



export class NovoSavetovanje{
    constructor(
  
        public farmaceut: Korisnik,
        public datum_vreme: Date,
        public zakazano: boolean,
        public pacijent: Korisnik
      
      
        
    ){}
}
