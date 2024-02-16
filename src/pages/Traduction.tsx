import React from "react";
import { IonButtons, IonContent, IonMenuButton, IonPage } from "@ionic/react";

const Traduction: React.FC = () => {
  return (
    <IonPage>
      <IonButtons slot="start">
        <IonMenuButton />
      </IonButtons>

      <IonContent fullscreen>Traduction</IonContent>
    </IonPage>
  );
};

export default Traduction;
