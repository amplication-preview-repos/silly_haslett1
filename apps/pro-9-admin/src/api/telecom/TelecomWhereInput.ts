import { StringFilter } from "../../util/StringFilter";
import { SalarieWhereUniqueInput } from "../salarie/SalarieWhereUniqueInput";

export type TelecomWhereInput = {
  id?: StringFilter;
  typeMoyen?: "tel" | "telmob" | "telpro" | "email";
  salarie?: SalarieWhereUniqueInput;
  valeurMoyen?: StringFilter;
};
