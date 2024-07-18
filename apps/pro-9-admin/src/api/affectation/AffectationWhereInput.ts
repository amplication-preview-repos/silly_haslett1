import { StringFilter } from "../../util/StringFilter";
import { SalarieWhereUniqueInput } from "../salarie/SalarieWhereUniqueInput";
import { AssociationWhereUniqueInput } from "../association/AssociationWhereUniqueInput";

export type AffectationWhereInput = {
  id?: StringFilter;
  activite?: "aide" | "soin" | "repas";
  salarie?: SalarieWhereUniqueInput;
  association?: AssociationWhereUniqueInput;
};
