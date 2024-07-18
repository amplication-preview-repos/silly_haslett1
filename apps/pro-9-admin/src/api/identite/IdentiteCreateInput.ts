import { SalarieWhereUniqueInput } from "../salarie/SalarieWhereUniqueInput";

export type IdentiteCreateInput = {
  codeLieuNaissance?: string | null;
  civilite?: "Option1" | null;
  salarie?: SalarieWhereUniqueInput | null;
};
