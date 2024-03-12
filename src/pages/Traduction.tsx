import React from "react";
import { IonButtons, IonContent, IonMenuButton, IonPage } from "@ionic/react";
import TradContent from "../components/Traduction/TradContent";

const Traduction: React.FC = () => {
  return (
    <IonPage>
      <IonButtons slot="start">
        <IonMenuButton />
      </IonButtons>

      <IonContent fullscreen>
        <TradContent />
      </IonContent>
    </IonPage>
  );
};

export default Traduction;
