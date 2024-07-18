import { Federation } from "../federation/Federation";

export type Utilisateur = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  civilite?: "Option1" | null;
  email: string | null;
  federation?: Federation | null;
};
