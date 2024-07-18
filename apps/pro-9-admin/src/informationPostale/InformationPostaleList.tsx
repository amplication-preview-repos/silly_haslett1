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
import { ADRESSE_TITLE_FIELD } from "../adresse/AdresseTitle";

export const InformationPostaleList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"InformationPostales"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="ancienCogCommune" source="ancienCogCommune" />
        <TextField label="cogCommune" source="cogCommune" />
        <ReferenceField label="adresse" source="adresse.id" reference="Adresse">
          <TextField source={ADRESSE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
