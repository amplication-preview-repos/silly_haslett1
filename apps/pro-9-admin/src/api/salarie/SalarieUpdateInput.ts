import { IdentiteWhereUniqueInput } from "../identite/IdentiteWhereUniqueInput";
import { TelecomUpdateManyWithoutSalariesInput } from "./TelecomUpdateManyWithoutSalariesInput";
import { AffectationUpdateManyWithoutSalariesInput } from "./AffectationUpdateManyWithoutSalariesInput";
import { AdresseWhereUniqueInput } from "../adresse/AdresseWhereUniqueInput";
import { FederationUpdateManyWithoutSalariesInput } from "./FederationUpdateManyWithoutSalariesInput";

export type SalarieUpdateInput = {
  identite?: IdentiteWhereUniqueInput | null;
  telecoms?: TelecomUpdateManyWithoutSalariesInput;
  affectations?: AffectationUpdateManyWithoutSalariesInput;
  domiciliation?: AdresseWhereUniqueInput;
  federation?: FederationUpdateManyWithoutSalariesInput;
  demenagement?: AdresseWhereUniqueInput | null;
};
