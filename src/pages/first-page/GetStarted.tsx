import React from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  useIonRouter,
} from "@ionic/react";

const GetStarted: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Get Started</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <h1>Start to use and enjoy ! ^_^</h1>
      </IonContent>

      <IonButton
        onClick={() => {
          console.log("Clicked");
        }}
      >
        Get Started
      </IonButton>
    </>
  );
};

export default GetStarted;
