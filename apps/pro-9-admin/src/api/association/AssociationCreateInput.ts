import { FederationWhereUniqueInput } from "../federation/FederationWhereUniqueInput";
import { DomaineCreateNestedManyWithoutAssociationsInput } from "./DomaineCreateNestedManyWithoutAssociationsInput";
import { AffectationCreateNestedManyWithoutAssociationsInput } from "./AffectationCreateNestedManyWithoutAssociationsInput";

export type AssociationCreateInput = {
  federation?: FederationWhereUniqueInput | null;
  domaines?: DomaineCreateNestedManyWithoutAssociationsInput;
  affectations?: AffectationCreateNestedManyWithoutAssociationsInput;
};
