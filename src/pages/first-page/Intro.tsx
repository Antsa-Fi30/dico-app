import React from "react";
import {
  IonBackButton,
  IonButtons,
  IonButton,
  IonHeader,
  IonContent,
  IonNavLink,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import GetStarted from "./GetStarted";

function Intro() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Introduction</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <h1>Page Two</h1>
        <IonNavLink routerDirection="forward" component={() => <GetStarted />}>
          <IonButton>Next</IonButton>
        </IonNavLink>
      </IonContent>
    </>
  );
}

export default Intro;
