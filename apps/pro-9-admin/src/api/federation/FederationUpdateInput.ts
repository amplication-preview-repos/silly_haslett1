import { AssociationUpdateManyWithoutFederationsInput } from "./AssociationUpdateManyWithoutFederationsInput";
import { SalarieUpdateManyWithoutFederationsInput } from "./SalarieUpdateManyWithoutFederationsInput";
import { UtilisateurUpdateManyWithoutFederationsInput } from "./UtilisateurUpdateManyWithoutFederationsInput";

export type FederationUpdateInput = {
  associations?: AssociationUpdateManyWithoutFederationsInput;
  salaries?: SalarieUpdateManyWithoutFederationsInput;
  utilisateurs?: UtilisateurUpdateManyWithoutFederationsInput;
};
