import { Lek } from "./lek";



export class LoggedInUser {
    constructor(
      public email: string,
      public ime: string,
      public prezime: string,
      public roles: Array<String>, 
      public password: string,
      public passwordChanged: boolean,
      public lek_alergija: Array<Lek>,
      public rezervisani_lekovi: Array<Lek>

    ) {}
  }
  