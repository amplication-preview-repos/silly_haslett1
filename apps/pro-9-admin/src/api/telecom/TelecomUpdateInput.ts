import { SalarieWhereUniqueInput } from "../salarie/SalarieWhereUniqueInput";

export type TelecomUpdateInput = {
  typeMoyen?: "tel" | "telmob" | "telpro" | "email";
  salarie?: SalarieWhereUniqueInput | null;
  valeurMoyen?: string;
};
