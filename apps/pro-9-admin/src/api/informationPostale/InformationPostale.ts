import { Adresse } from "../adresse/Adresse";

export type InformationPostale = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  ancienCogCommune: string | null;
  cogCommune: string | null;
  adresses?: Adresse;
};
