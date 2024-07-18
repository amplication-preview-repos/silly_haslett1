import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { FederationList } from "./federation/FederationList";
import { FederationCreate } from "./federation/FederationCreate";
import { FederationEdit } from "./federation/FederationEdit";
import { FederationShow } from "./federation/FederationShow";
import { AssociationList } from "./association/AssociationList";
import { AssociationCreate } from "./association/AssociationCreate";
import { AssociationEdit } from "./association/AssociationEdit";
import { AssociationShow } from "./association/AssociationShow";
import { DomaineList } from "./domaine/DomaineList";
import { DomaineCreate } from "./domaine/DomaineCreate";
import { DomaineEdit } from "./domaine/DomaineEdit";
import { DomaineShow } from "./domaine/DomaineShow";
import { AdresseList } from "./adresse/AdresseList";
import { AdresseCreate } from "./adresse/AdresseCreate";
import { AdresseEdit } from "./adresse/AdresseEdit";
import { AdresseShow } from "./adresse/AdresseShow";
import { UtilisateurList } from "./utilisateur/UtilisateurList";
import { UtilisateurCreate } from "./utilisateur/UtilisateurCreate";
import { UtilisateurEdit } from "./utilisateur/UtilisateurEdit";
import { UtilisateurShow } from "./utilisateur/UtilisateurShow";
import { IdentiteList } from "./identite/IdentiteList";
import { IdentiteCreate } from "./identite/IdentiteCreate";
import { IdentiteEdit } from "./identite/IdentiteEdit";
import { IdentiteShow } from "./identite/IdentiteShow";
import { TelecomList } from "./telecom/TelecomList";
import { TelecomCreate } from "./telecom/TelecomCreate";
import { TelecomEdit } from "./telecom/TelecomEdit";
import { TelecomShow } from "./telecom/TelecomShow";
import { InformationPostaleList } from "./informationPostale/InformationPostaleList";
import { InformationPostaleCreate } from "./informationPostale/InformationPostaleCreate";
import { InformationPostaleEdit } from "./informationPostale/InformationPostaleEdit";
import { InformationPostaleShow } from "./informationPostale/InformationPostaleShow";
import { AffectationList } from "./affectation/AffectationList";
import { AffectationCreate } from "./affectation/AffectationCreate";
import { AffectationEdit } from "./affectation/AffectationEdit";
import { AffectationShow } from "./affectation/AffectationShow";
import { SalarieList } from "./salarie/SalarieList";
import { SalarieCreate } from "./salarie/SalarieCreate";
import { SalarieEdit } from "./salarie/SalarieEdit";
import { SalarieShow } from "./salarie/SalarieShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Employee"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Federation"
          list={FederationList}
          edit={FederationEdit}
          create={FederationCreate}
          show={FederationShow}
        />
        <Resource
          name="Association"
          list={AssociationList}
          edit={AssociationEdit}
          create={AssociationCreate}
          show={AssociationShow}
        />
        <Resource
          name="Domaine"
          list={DomaineList}
          edit={DomaineEdit}
          create={DomaineCreate}
          show={DomaineShow}
        />
        <Resource
          name="Adresse"
          list={AdresseList}
          edit={AdresseEdit}
          create={AdresseCreate}
          show={AdresseShow}
        />
        <Resource
          name="Utilisateur"
          list={UtilisateurList}
          edit={UtilisateurEdit}
          create={UtilisateurCreate}
          show={UtilisateurShow}
        />
        <Resource
          name="Identite"
          list={IdentiteList}
          edit={IdentiteEdit}
          create={IdentiteCreate}
          show={IdentiteShow}
        />
        <Resource
          name="Telecom"
          list={TelecomList}
          edit={TelecomEdit}
          create={TelecomCreate}
          show={TelecomShow}
        />
        <Resource
          name="InformationPostale"
          list={InformationPostaleList}
          edit={InformationPostaleEdit}
          create={InformationPostaleCreate}
          show={InformationPostaleShow}
        />
        <Resource
          name="Affectation"
          list={AffectationList}
          edit={AffectationEdit}
          create={AffectationCreate}
          show={AffectationShow}
        />
        <Resource
          name="Salarie"
          list={SalarieList}
          edit={SalarieEdit}
          create={SalarieCreate}
          show={SalarieShow}
        />
      </Admin>
    </div>
  );
};

export default App;
