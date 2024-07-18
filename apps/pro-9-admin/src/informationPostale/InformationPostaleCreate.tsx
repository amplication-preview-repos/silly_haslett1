import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AdresseTitle } from "../adresse/AdresseTitle";

export const InformationPostaleCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ancienCogCommune" source="ancienCogCommune" />
        <TextInput label="cogCommune" source="cogCommune" />
        <ReferenceInput
          source="adresses.id"
          reference="Adresse"
          label="adresse"
        >
          <SelectInput optionText={AdresseTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
