import { Salarie } from "../salarie/Salarie";
import { Association } from "../association/Association";

export type Affectation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  activite?: "aide" | "soin" | "repas" | null;
  salarie?: Salarie | null;
  association?: Association | null;
};
