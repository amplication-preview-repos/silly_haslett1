import { SortOrder } from "../../util/SortOrder";

export type InformationPostaleOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  ancienCogCommune?: SortOrder;
  cogCommune?: SortOrder;
  adressesId?: SortOrder;
};
