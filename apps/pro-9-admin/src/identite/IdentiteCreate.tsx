import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { SalarieTitle } from "../salarie/SalarieTitle";

export const IdentiteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
