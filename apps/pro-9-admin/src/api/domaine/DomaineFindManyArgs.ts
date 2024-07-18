import { DomaineWhereInput } from "./DomaineWhereInput";
import { DomaineOrderByInput } from "./DomaineOrderByInput";

export type DomaineFindManyArgs = {
  where?: DomaineWhereInput;
  orderBy?: Array<DomaineOrderByInput>;
  skip?: number;
  take?: number;
};
