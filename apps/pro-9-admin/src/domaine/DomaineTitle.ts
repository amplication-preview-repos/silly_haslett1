import { Domaine as TDomaine } from "../api/domaine/Domaine";

export const DOMAINE_TITLE_FIELD = "id";

export const DomaineTitle = (record: TDomaine): string => {
  return record.id?.toString() || String(record.id);
};
