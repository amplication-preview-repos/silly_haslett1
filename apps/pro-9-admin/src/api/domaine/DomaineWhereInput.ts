import { StringFilter } from "../../util/StringFilter";
import { AssociationWhereUniqueInput } from "../association/AssociationWhereUniqueInput";

export type DomaineWhereInput = {
  id?: StringFilter;
  association?: AssociationWhereUniqueInput;
};
