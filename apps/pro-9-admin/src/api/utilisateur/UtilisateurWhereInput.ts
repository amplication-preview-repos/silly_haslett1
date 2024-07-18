import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FederationWhereUniqueInput } from "../federation/FederationWhereUniqueInput";

export type UtilisateurWhereInput = {
  id?: StringFilter;
  civilite?: "Option1";
  email?: StringNullableFilter;
  federation?: FederationWhereUniqueInput;
};
