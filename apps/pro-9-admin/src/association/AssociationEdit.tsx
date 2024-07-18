import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FederationTitle } from "../federation/FederationTitle";
import { DomaineTitle } from "../domaine/DomaineTitle";
import { AffectationTitle } from "../affectation/AffectationTitle";

export const AssociationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
