import { SortOrder } from "../../util/SortOrder";

export type UtilisateurOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  civilite?: SortOrder;
  email?: SortOrder;
  federationId?: SortOrder;
};
