import { AdresseWhereUniqueInput } from "../adresse/AdresseWhereUniqueInput";

export type InformationPostaleUpdateInput = {
  ancienCogCommune?: string | null;
  cogCommune?: string | null;
  adresses?: AdresseWhereUniqueInput;
};
