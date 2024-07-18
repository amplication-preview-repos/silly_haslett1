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

import { IDENTITE_TITLE_FIELD } from "../identite/IdentiteTitle";
import { ADRESSE_TITLE_FIELD } from "./AdresseTitle";
import { INFORMATIONPOSTALE_TITLE_FIELD } from "../informationPostale/InformationPostaleTitle";

export const AdresseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="debutValidite" source="debutValidite" />
        <TextField label="finValidite" source="finValidite" />
        <ReferenceField
          label="informationPostale"
          source="informationpostale.id"
          reference="InformationPostale"
        >
          <TextField source={INFORMATIONPOSTALE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Salarie"
          target="domiciliation"
          label="Salaries"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Salarie"
          target="demenagement"
          label="Salaries"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
