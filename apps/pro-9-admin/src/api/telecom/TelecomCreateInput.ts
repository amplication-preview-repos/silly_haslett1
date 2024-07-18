import { SalarieWhereUniqueInput } from "../salarie/SalarieWhereUniqueInput";

export type TelecomCreateInput = {
  typeMoyen: "tel" | "telmob" | "telpro" | "email";
  salarie?: SalarieWhereUniqueInput | null;
  valeurMoyen: string;
};
