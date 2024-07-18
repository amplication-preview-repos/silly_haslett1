import { Salarie } from "../salarie/Salarie";

export type Identite = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  codeLieuNaissance: string | null;
  civilite?: "Option1" | null;
  salarie?: Salarie | null;
};
