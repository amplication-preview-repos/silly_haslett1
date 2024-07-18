import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { SalarieTitle } from "../salarie/SalarieTitle";

export const IdentiteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="codeLieuNaissance" source="codeLieuNaissance" />
        <SelectInput
          source="civilite"
          label="civilite"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="salarie.id" reference="Salarie" label="salarie">
          <SelectInput optionText={SalarieTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
