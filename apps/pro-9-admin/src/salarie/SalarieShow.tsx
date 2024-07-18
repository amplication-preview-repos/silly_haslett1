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

import { SALARIE_TITLE_FIELD } from "./SalarieTitle";
import { ASSOCIATION_TITLE_FIELD } from "../association/AssociationTitle";
import { IDENTITE_TITLE_FIELD } from "../identite/IdentiteTitle";
import { ADRESSE_TITLE_FIELD } from "../adresse/AdresseTitle";

export const SalarieShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="identite"
          source="identite.id"
          reference="Identite"
        >
          <TextField source={IDENTITE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="domiciliation"
          source="adresse.id"
          reference="Adresse"
        >
          <TextField source={ADRESSE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="demenagement"
          source="adresse.id"
          reference="Adresse"
        >
          <TextField source={ADRESSE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Telecom"
          target="salarieId"
          label="Telecoms"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="typeMoyen" source="typeMoyen" />
            <ReferenceField
              label="salarie"
              source="salarie.id"
              reference="Salarie"
            >
              <TextField source={SALARIE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="valeurMoyen" source="valeurMoyen" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Affectation"
          target="salarieId"
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
