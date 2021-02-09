import { Apoteka } from "./apoteka";

export class NoviLek{
    constructor(
      
        public naziv: String,
        public cena: number,
        public apoteka: Apoteka,
        public rezervisan: boolean
      
        
    ){}
}
