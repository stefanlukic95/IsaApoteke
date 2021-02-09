
import { Korisnik } from "./korisnik";



export class Savetovanje{
    constructor(
        public id: number,
        public farmaceut: Korisnik,
        public datum_vreme: Date,
        public zakazano: boolean
      

      
        
    ){}
}
