import { AdresseWhereUniqueInput } from "../adresse/AdresseWhereUniqueInput";

export type InformationPostaleCreateInput = {
  ancienCogCommune?: string | null;
  cogCommune?: string | null;
  adresses: AdresseWhereUniqueInput;
};
