import { InformationPostaleWhereUniqueInput } from "../informationPostale/InformationPostaleWhereUniqueInput";
import { SalarieCreateNestedManyWithoutAdressesInput } from "./SalarieCreateNestedManyWithoutAdressesInput";

export type AdresseCreateInput = {
  debutValidite?: Date | null;
  finValidite?: Date | null;
  informationPostale?: InformationPostaleWhereUniqueInput | null;
  salariesDomiciliees?: SalarieCreateNestedManyWithoutAdressesInput;
  salarieesHebergees?: SalarieCreateNestedManyWithoutAdressesInput;
};
