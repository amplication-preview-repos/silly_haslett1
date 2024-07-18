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
import { INFORMATIONPOSTALE_TITLE_FIELD } from "../informationPostale/InformationPostaleTitle";

export const AdresseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Adresses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
