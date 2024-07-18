import { Identite } from "../identite/Identite";
import { Telecom } from "../telecom/Telecom";
import { Affectation } from "../affectation/Affectation";
import { Adresse } from "../adresse/Adresse";
import { Federation } from "../federation/Federation";

export type Salarie = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  identite?: Identite | null;
  telecoms?: Array<Telecom>;
  affectations?: Array<Affectation>;
  domiciliation?: Adresse;
  federation?: Array<Federation>;
  demenagement?: Adresse | null;
};
