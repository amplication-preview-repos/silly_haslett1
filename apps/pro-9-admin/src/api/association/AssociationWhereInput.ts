import { StringFilter } from "../../util/StringFilter";
import { FederationWhereUniqueInput } from "../federation/FederationWhereUniqueInput";
import { DomaineListRelationFilter } from "../domaine/DomaineListRelationFilter";
import { AffectationListRelationFilter } from "../affectation/AffectationListRelationFilter";

export type AssociationWhereInput = {
  id?: StringFilter;
  federation?: FederationWhereUniqueInput;
  domaines?: DomaineListRelationFilter;
  affectations?: AffectationListRelationFilter;
};
