import { Apoteka } from "./apoteka";

export class Lek{
    constructor(
        public id: number,
        public naziv: String,
        public cena: number,
        public apoteke: Apoteka,
        public rezervisan: boolean
      
        
    ){}
}
