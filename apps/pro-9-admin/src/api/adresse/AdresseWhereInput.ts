import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { InformationPostaleWhereUniqueInput } from "../informationPostale/InformationPostaleWhereUniqueInput";
import { SalarieListRelationFilter } from "../salarie/SalarieListRelationFilter";

export type AdresseWhereInput = {
  id?: StringFilter;
  debutValidite?: DateTimeNullableFilter;
  finValidite?: DateTimeNullableFilter;
  informationPostale?: InformationPostaleWhereUniqueInput;
  salariesDomiciliees?: SalarieListRelationFilter;
  salarieesHebergees?: SalarieListRelationFilter;
};
