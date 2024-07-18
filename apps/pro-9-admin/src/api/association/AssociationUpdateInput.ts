import { FederationWhereUniqueInput } from "../federation/FederationWhereUniqueInput";
import { DomaineUpdateManyWithoutAssociationsInput } from "./DomaineUpdateManyWithoutAssociationsInput";
import { AffectationUpdateManyWithoutAssociationsInput } from "./AffectationUpdateManyWithoutAssociationsInput";

export type AssociationUpdateInput = {
  federation?: FederationWhereUniqueInput | null;
  domaines?: DomaineUpdateManyWithoutAssociationsInput;
  affectations?: AffectationUpdateManyWithoutAssociationsInput;
};
