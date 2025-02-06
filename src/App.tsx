import {
  Admin,
  EditGuesser,
  ListGuesser,
  Resource,
  ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { HomePage } from "./Pages/homepage";
import Loginpage from "./Pages/loginpage";
import { OnboardingList } from "./Pages/onboarding/onboarding-list";
import { OnboardingEdit } from "./Pages/onboarding/onboarding-edit";
import { OnboardingShow } from "./Pages/onboarding/onboarding-show";
import { IdvList } from "./Pages/idvs/idvs-list";
import { IdvEdit } from "./Pages/idvs/idvs-edit";
import { IdvShow } from "./Pages/idvs/idvs-show";

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
    dashboard={HomePage}
    loginPage={Loginpage}
  >
    <Resource
      name="onboarding"
      list={OnboardingList}
      edit={OnboardingEdit}
      show={OnboardingShow}
    />

    <Resource name="idvs" list={IdvList} edit={IdvEdit} show={IdvShow} />
  </Admin>
);
