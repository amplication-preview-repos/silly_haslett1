import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AdresseWhereUniqueInput } from "../adresse/AdresseWhereUniqueInput";

export type InformationPostaleWhereInput = {
  id?: StringFilter;
  ancienCogCommune?: StringNullableFilter;
  cogCommune?: StringNullableFilter;
  adresses?: AdresseWhereUniqueInput;
};
