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
import { ASSOCIATION_TITLE_FIELD } from "../association/AssociationTitle";

export const AffectationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="activite" source="activite" />
        <ReferenceField label="salarie" source="salarie.id" reference="Salarie">
          <TextField source={SALARIE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="association"
          source="association.id"
          reference="Association"
        >
          <TextField source={ASSOCIATION_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
