import { AssociationCreateNestedManyWithoutFederationsInput } from "./AssociationCreateNestedManyWithoutFederationsInput";
import { SalarieCreateNestedManyWithoutFederationsInput } from "./SalarieCreateNestedManyWithoutFederationsInput";
import { UtilisateurCreateNestedManyWithoutFederationsInput } from "./UtilisateurCreateNestedManyWithoutFederationsInput";

export type FederationCreateInput = {
  associations?: AssociationCreateNestedManyWithoutFederationsInput;
  salaries?: SalarieCreateNestedManyWithoutFederationsInput;
  utilisateurs?: UtilisateurCreateNestedManyWithoutFederationsInput;
};
