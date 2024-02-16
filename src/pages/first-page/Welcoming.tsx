import React from "react";
import {
  IonButton,
  IonHeader,
  IonContent,
  IonNavLink,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import Intro from "./Intro";

function Welcoming() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome there</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <h1>Welcome to this dico-App</h1>
        <IonNavLink routerDirection="forward" component={() => <Intro />}>
          <IonButton>Next</IonButton>
        </IonNavLink>
      </IonContent>
    </>
  );
}

export default Welcoming;
