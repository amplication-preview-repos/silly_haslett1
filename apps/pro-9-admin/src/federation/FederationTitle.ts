import { Federation as TFederation } from "../api/federation/Federation";

export const FEDERATION_TITLE_FIELD = "id";

export const FederationTitle = (record: TFederation): string => {
  return record.id?.toString() || String(record.id);
};
