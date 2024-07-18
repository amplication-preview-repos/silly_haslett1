import { SalarieWhereUniqueInput } from "../salarie/SalarieWhereUniqueInput";

export type IdentiteUpdateInput = {
  codeLieuNaissance?: string | null;
  civilite?: "Option1" | null;
  salarie?: SalarieWhereUniqueInput | null;
};
