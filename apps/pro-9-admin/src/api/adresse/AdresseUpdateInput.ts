import { InformationPostaleWhereUniqueInput } from "../informationPostale/InformationPostaleWhereUniqueInput";
import { SalarieUpdateManyWithoutAdressesInput } from "./SalarieUpdateManyWithoutAdressesInput";

export type AdresseUpdateInput = {
  debutValidite?: Date | null;
  finValidite?: Date | null;
  informationPostale?: InformationPostaleWhereUniqueInput | null;
  salariesDomiciliees?: SalarieUpdateManyWithoutAdressesInput;
  salarieesHebergees?: SalarieUpdateManyWithoutAdressesInput;
};
