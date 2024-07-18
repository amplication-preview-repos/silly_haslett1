import { StringFilter } from "../../util/StringFilter";
import { AssociationListRelationFilter } from "../association/AssociationListRelationFilter";
import { SalarieListRelationFilter } from "../salarie/SalarieListRelationFilter";
import { UtilisateurListRelationFilter } from "../utilisateur/UtilisateurListRelationFilter";

export type FederationWhereInput = {
  id?: StringFilter;
  associations?: AssociationListRelationFilter;
  salaries?: SalarieListRelationFilter;
  utilisateurs?: UtilisateurListRelationFilter;
};
