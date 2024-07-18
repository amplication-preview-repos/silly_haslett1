import { FederationWhereUniqueInput } from "../federation/FederationWhereUniqueInput";

export type UtilisateurCreateInput = {
  civilite?: "Option1" | null;
  email?: string | null;
  federation?: FederationWhereUniqueInput | null;
};
