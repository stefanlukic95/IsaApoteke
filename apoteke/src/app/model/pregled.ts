import { Korisnik } from "./korisnik";



export class Pregled{
    constructor(
        public id: number,
        public dermatolog: Korisnik,
        public datum_vreme: Date,
        public cena: number,
        public rezervisan: boolean
      
        
    ){}
}
