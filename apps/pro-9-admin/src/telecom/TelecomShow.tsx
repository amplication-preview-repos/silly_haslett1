import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { SALARIE_TITLE_FIELD } from "../salarie/SalarieTitle";

export const TelecomShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="typeMoyen" source="typeMoyen" />
        <ReferenceField label="salarie" source="salarie.id" reference="Salarie">
          <TextField source={SALARIE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="valeurMoyen" source="valeurMoyen" />
      </SimpleShowLayout>
    </Show>
  );
};
