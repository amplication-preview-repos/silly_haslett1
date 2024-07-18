import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
  ReferenceInput,
} from "react-admin";
import { FederationTitle } from "../federation/FederationTitle";

export const UtilisateurCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="civilite"
          label="civilite"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="email" source="email" type="email" />
        <ReferenceInput
          source="federation.id"
          reference="Federation"
          label="federation"
        >
          <SelectInput optionText={FederationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
