import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { IdentiteTitle } from "../identite/IdentiteTitle";
import { TelecomTitle } from "../telecom/TelecomTitle";
import { AffectationTitle } from "../affectation/AffectationTitle";
import { AdresseTitle } from "../adresse/AdresseTitle";
import { FederationTitle } from "../federation/FederationTitle";

export const SalarieCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="identite.id"
          reference="Identite"
          label="identite"
        >
          <SelectInput optionText={IdentiteTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="telecoms"
          reference="Telecom"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TelecomTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="affectations"
          reference="Affectation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AffectationTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="domiciliation.id"
          reference="Adresse"
          label="domiciliation"
        >
          <SelectInput optionText={AdresseTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="federation"
          reference="Federation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FederationTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="demenagement.id"
          reference="Adresse"
          label="demenagement"
        >
          <SelectInput optionText={AdresseTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
