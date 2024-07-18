import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ASSOCIATION_TITLE_FIELD } from "./AssociationTitle";
import { SALARIE_TITLE_FIELD } from "../salarie/SalarieTitle";
import { FEDERATION_TITLE_FIELD } from "../federation/FederationTitle";

export const AssociationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="federation"
          source="federation.id"
          reference="Federation"
        >
          <TextField source={FEDERATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Domaine"
          target="associationId"
          label="Domaines"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="association"
              source="association.id"
              reference="Association"
            >
              <TextField source={ASSOCIATION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Affectation"
          target="associationId"
          label="Affectations"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="activite" source="activite" />
            <ReferenceField
              label="salarie"
              source="salarie.id"
              reference="Salarie"
            >
              <TextField source={SALARIE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="association"
              source="association.id"
              reference="Association"
            >
              <TextField source={ASSOCIATION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
