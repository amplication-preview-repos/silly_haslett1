import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SalarieWhereUniqueInput } from "../salarie/SalarieWhereUniqueInput";

export type IdentiteWhereInput = {
  id?: StringFilter;
  codeLieuNaissance?: StringNullableFilter;
  civilite?: "Option1";
  salarie?: SalarieWhereUniqueInput;
};
