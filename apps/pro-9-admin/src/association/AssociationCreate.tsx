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

import { FederationTitle } from "../federation/FederationTitle";
import { DomaineTitle } from "../domaine/DomaineTitle";
import { AffectationTitle } from "../affectation/AffectationTitle";

export const AssociationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="federation.id"
          reference="Federation"
          label="federation"
        >
          <SelectInput optionText={FederationTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="domaines"
          reference="Domaine"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DomaineTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="affectations"
          reference="Affectation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AffectationTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
