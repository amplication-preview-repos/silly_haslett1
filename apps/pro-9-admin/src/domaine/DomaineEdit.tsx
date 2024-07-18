import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AssociationTitle } from "../association/AssociationTitle";

export const DomaineEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="association.id"
          reference="Association"
          label="association"
        >
          <SelectInput optionText={AssociationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
