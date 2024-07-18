import { IdentiteWhereUniqueInput } from "../identite/IdentiteWhereUniqueInput";
import { TelecomCreateNestedManyWithoutSalariesInput } from "./TelecomCreateNestedManyWithoutSalariesInput";
import { AffectationCreateNestedManyWithoutSalariesInput } from "./AffectationCreateNestedManyWithoutSalariesInput";
import { AdresseWhereUniqueInput } from "../adresse/AdresseWhereUniqueInput";
import { FederationCreateNestedManyWithoutSalariesInput } from "./FederationCreateNestedManyWithoutSalariesInput";

export type SalarieCreateInput = {
  identite?: IdentiteWhereUniqueInput | null;
  telecoms?: TelecomCreateNestedManyWithoutSalariesInput;
  affectations?: AffectationCreateNestedManyWithoutSalariesInput;
  domiciliation: AdresseWhereUniqueInput;
  federation?: FederationCreateNestedManyWithoutSalariesInput;
  demenagement?: AdresseWhereUniqueInput | null;
};
