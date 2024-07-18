import { FederationWhereUniqueInput } from "../federation/FederationWhereUniqueInput";

export type UtilisateurUpdateInput = {
  civilite?: "Option1" | null;
  email?: string | null;
  federation?: FederationWhereUniqueInput | null;
};
