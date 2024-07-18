import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  ReferenceInput,
  TextInput,
} from "react-admin";
import { SalarieTitle } from "../salarie/SalarieTitle";

export const TelecomCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="typeMoyen"
          label="typeMoyen"
          choices={[
            { label: "Telephone", value: "tel" },
            { label: "Telephone Mobile", value: "telmob" },
            { label: "Telephone Pro", value: "telpro" },
            { label: "Email", value: "email" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="salarie.id" reference="Salarie" label="salarie">
          <SelectInput optionText={SalarieTitle} />
        </ReferenceInput>
        <TextInput label="valeurMoyen" source="valeurMoyen" />
      </SimpleForm>
    </Create>
  );
};
