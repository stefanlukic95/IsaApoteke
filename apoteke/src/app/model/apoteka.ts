import { Lek } from "./lek";
import { Korisnik } from "./korisnik";
import { Akcija } from '../model/akcija';
import { Pregled } from '../model/pregled';
import { Savetovanje } from '../model/savetovanje';


export class Apoteka{
    constructor(
        public id: number,
        public naziv: String,
        public adresa: String,
        public opis: String,
        public dermatolozi: Array<Korisnik>,
        public farmaceuti: Array<Korisnik>,
        public lekovi: Array<Lek>,
        public akcije: Array<Akcija>,
        public pregledi: Array<Pregled>,
        public administratorApoteke: Korisnik,
        public savetovanja: Array<Savetovanje>




     
        
    ){}
}
