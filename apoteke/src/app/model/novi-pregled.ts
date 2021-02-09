import { Korisnik } from "./korisnik";



export class NoviPregled{
    constructor(
       
        public dermatolog: Korisnik,
        public datum_vreme: Date,
        public cena: number,
        public rezervisan: boolean
      
        
    ){}
}
