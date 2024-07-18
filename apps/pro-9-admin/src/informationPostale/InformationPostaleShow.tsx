import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { ADRESSE_TITLE_FIELD } from "../adresse/AdresseTitle";

export const InformationPostaleShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="ancienCogCommune" source="ancienCogCommune" />
        <TextField label="cogCommune" source="cogCommune" />
        <ReferenceField label="adresse" source="adresse.id" reference="Adresse">
          <TextField source={ADRESSE_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
