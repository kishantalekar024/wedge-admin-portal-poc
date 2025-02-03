import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  Login,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { UserList } from "./Pages/users/user-list";
import { UserEdit } from "./Pages/users/user-edit";
import { HomePage } from "./Pages/homepage";
import Loginpage from "./Pages/loginpage";

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
    dashboard={HomePage}
    loginPage={Loginpage}
  >
    <Resource name="users" list={UserList} edit={UserEdit} show={ShowGuesser} />
  </Admin>
);
