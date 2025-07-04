import { useState } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";
import Tab4 from "./pages/Tab4";
import AddExpense from "./pages/add-expense/AddExpense";
import AddIncome from "./pages/add-income/AddIncome";
import Budget from "./pages/budget/budget";
import Profile from "./pages/profile/profile";
import Register from "./pages/register/Register";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */

/* Theme variables */
import "./theme/variables.css";
import AddTypeModal from "./components/type-transaction/AddTypeModal";
import Login from "./pages/login/Login";
import SendOtp from "./pages/send-otp/Sendotp";

setupIonicReact();
const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <MainTabs />
      </IonReactRouter>
    </IonApp>
  );
};

const MainTabs: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const hideTabBar = /^\/(login|register|forgot-password|send-otp)/.test(
    location.pathname
  );

  return (
    <>
      {!hideTabBar && <AddTypeModal />}
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route exact path="/budget">
            <Budget />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route path="/add-expense">
            <AddExpense />
          </Route>
          <Route path="/add-income">
            <AddIncome />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route path="/send-otp" exact>
            <SendOtp />
          </Route>

          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>

        {!hideTabBar && (
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <img
                src="/icons/home.svg"
                alt="Tab 1"
                style={{ width: "24px", height: "24px" }}
              />
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <img
                src="/icons/Transaction.svg"
                alt="Tab 2"
                style={{ width: "24px", height: "24px" }}
              />
            </IonTabButton>
            <IonTabButton
              tab="add-expense"
              onClick={() => setShowModal(true)}
            />
            <IonTabButton tab="budget" href="/budget">
              <img
                src="/icons/pie.svg"
                alt="Tab 3"
                style={{ width: "24px", height: "24px" }}
              />
            </IonTabButton>
            <IonTabButton tab="profile" href="/profile">
              <img
                src="/icons/user.svg"
                alt="Tab 4"
                style={{ width: "24px", height: "24px" }}
              />
            </IonTabButton>
          </IonTabBar>
        )}
      </IonTabs>
    </>
  );
};

export default App;
