import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { IDENTITE_TITLE_FIELD } from "../identite/IdentiteTitle";
import { ADRESSE_TITLE_FIELD } from "../adresse/AdresseTitle";

export const SalarieList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Salaries"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
