import { Telecom as TTelecom } from "../api/telecom/Telecom";

export const TELECOM_TITLE_FIELD = "valeurMoyen";

export const TelecomTitle = (record: TTelecom): string => {
  return record.valeurMoyen?.toString() || String(record.id);
};
