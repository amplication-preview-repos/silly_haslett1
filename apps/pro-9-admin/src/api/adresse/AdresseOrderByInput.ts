import { SortOrder } from "../../util/SortOrder";

export type AdresseOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  debutValidite?: SortOrder;
  finValidite?: SortOrder;
  informationPostaleId?: SortOrder;
};
