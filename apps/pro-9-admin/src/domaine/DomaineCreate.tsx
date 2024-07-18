import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AssociationTitle } from "../association/AssociationTitle";

export const DomaineCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="association.id"
          reference="Association"
          label="association"
        >
          <SelectInput optionText={AssociationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
