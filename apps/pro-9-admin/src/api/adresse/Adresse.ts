import { InformationPostale } from "../informationPostale/InformationPostale";
import { Salarie } from "../salarie/Salarie";

export type Adresse = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  debutValidite: Date | null;
  finValidite: Date | null;
  informationPostale?: InformationPostale | null;
  salariesDomiciliees?: Array<Salarie>;
  salarieesHebergees?: Array<Salarie>;
};
