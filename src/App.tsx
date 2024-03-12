import {
  IonApp,
  IonNav,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

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

/* Theme variables */
import "./theme/variables.css";

//Menu Components
import Menu from "./components/Menu";
import { IonButtons, IonContent, IonMenuButton, IonPage } from "@ionic/react";

// Pages components
import Welcoming from "./pages/first-page/Welcoming";
import Search from "./pages/Search";
import Traduction from "./pages/Traduction";
import Favorites from "./pages/Favorites";
import Archived from "./pages/Archived";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/search" />
            </Route>
            <Route path="/search" exact={true}>
              <Search />
            </Route>
            <Route path="/traduction" exact={true}>
              <Traduction />
            </Route>
            <Route path="/favorites" exact={true}>
              <Favorites />
            </Route>
            <Route path="/archived" exact={true}>
              <Archived />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
      {/* <IonNav root={() => <Welcoming />}></IonNav>; */}
    </IonApp>
  );
};

export default App;
