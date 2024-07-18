import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { SalarieTitle } from "../salarie/SalarieTitle";
import { AssociationTitle } from "../association/AssociationTitle";

export const AffectationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="activite"
          label="activite"
          choices={[
            { label: "Aide", value: "aide" },
            { label: "Soin", value: "soin" },
            { label: "Repas", value: "repas" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="salarie.id" reference="Salarie" label="salarie">
          <SelectInput optionText={SalarieTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="association.id"
          reference="Association"
          label="association"
        >
          <SelectInput optionText={AssociationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
