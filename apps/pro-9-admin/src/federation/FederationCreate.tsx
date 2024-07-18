import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { AssociationTitle } from "../association/AssociationTitle";
import { SalarieTitle } from "../salarie/SalarieTitle";
import { UtilisateurTitle } from "../utilisateur/UtilisateurTitle";

export const FederationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="associations"
          reference="Association"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AssociationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="salaries"
          reference="Salarie"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SalarieTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="utilisateurs"
          reference="Utilisateur"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UtilisateurTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
