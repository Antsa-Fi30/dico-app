import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import {
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
} from "ionicons/icons";

import { useLocation } from "react-router-dom";

import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Search",
    url: "/search",
    iosIcon: mailOutline,
    mdIcon: mailSharp,
  },
  {
    title: "Traduction",
    url: "/traduction",
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp,
  },
  {
    title: "Favorites",
    url: "/favorites",
    iosIcon: heartOutline,
    mdIcon: heartSharp,
  },
  {
    title: "Archived",
    url: "/archived",
    iosIcon: archiveOutline,
    mdIcon: archiveSharp,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Dictionnary KR</IonListHeader>
          <IonNote>Version 0.0.1</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    aria-hidden="true"
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
      <div>
        <IonNote>Produced by</IonNote>
      </div>
    </IonMenu>
  );
};

export default Menu;
