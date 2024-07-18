import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { InformationPostaleTitle } from "../informationPostale/InformationPostaleTitle";
import { SalarieTitle } from "../salarie/SalarieTitle";

export const AdresseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="debutValidite" source="debutValidite" />
        <DateTimeInput label="finValidite" source="finValidite" />
        <ReferenceInput
          source="informationPostale.id"
          reference="InformationPostale"
          label="informationPostale"
        >
          <SelectInput optionText={InformationPostaleTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="salariesDomiciliees"
          reference="Salarie"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SalarieTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="salarieesHebergees"
          reference="Salarie"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SalarieTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
