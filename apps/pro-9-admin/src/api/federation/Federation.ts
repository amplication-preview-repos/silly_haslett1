import { Association } from "../association/Association";
import { Salarie } from "../salarie/Salarie";
import { Utilisateur } from "../utilisateur/Utilisateur";

export type Federation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  associations?: Array<Association>;
  salaries?: Array<Salarie>;
  utilisateurs?: Array<Utilisateur>;
};
