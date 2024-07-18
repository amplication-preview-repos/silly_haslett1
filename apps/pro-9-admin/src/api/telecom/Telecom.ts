import { Salarie } from "../salarie/Salarie";

export type Telecom = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  typeMoyen?: "tel" | "telmob" | "telpro" | "email";
  salarie?: Salarie | null;
  valeurMoyen: string;
};
