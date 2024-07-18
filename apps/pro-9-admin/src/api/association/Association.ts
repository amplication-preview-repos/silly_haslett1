import { Federation } from "../federation/Federation";
import { Domaine } from "../domaine/Domaine";
import { Affectation } from "../affectation/Affectation";

export type Association = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  federation?: Federation | null;
  domaines?: Array<Domaine>;
  affectations?: Array<Affectation>;
};
