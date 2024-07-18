import { SalarieWhereUniqueInput } from "../salarie/SalarieWhereUniqueInput";
import { AssociationWhereUniqueInput } from "../association/AssociationWhereUniqueInput";

export type AffectationCreateInput = {
  activite?: "aide" | "soin" | "repas" | null;
  salarie?: SalarieWhereUniqueInput | null;
  association?: AssociationWhereUniqueInput | null;
};
