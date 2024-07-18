import { StringFilter } from "../../util/StringFilter";
import { IdentiteWhereUniqueInput } from "../identite/IdentiteWhereUniqueInput";
import { TelecomListRelationFilter } from "../telecom/TelecomListRelationFilter";
import { AffectationListRelationFilter } from "../affectation/AffectationListRelationFilter";
import { AdresseWhereUniqueInput } from "../adresse/AdresseWhereUniqueInput";
import { FederationListRelationFilter } from "../federation/FederationListRelationFilter";

export type SalarieWhereInput = {
  id?: StringFilter;
  identite?: IdentiteWhereUniqueInput;
  telecoms?: TelecomListRelationFilter;
  affectations?: AffectationListRelationFilter;
  domiciliation?: AdresseWhereUniqueInput;
  federation?: FederationListRelationFilter;
  demenagement?: AdresseWhereUniqueInput;
};
