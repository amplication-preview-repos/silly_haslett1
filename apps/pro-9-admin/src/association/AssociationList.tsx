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
import { FEDERATION_TITLE_FIELD } from "../federation/FederationTitle";

export const AssociationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Associations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
