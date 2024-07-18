import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AdresseTitle } from "../adresse/AdresseTitle";

export const InformationPostaleEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
