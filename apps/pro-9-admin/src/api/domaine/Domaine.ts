import { Association } from "../association/Association";

export type Domaine = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  association?: Association | null;
};
