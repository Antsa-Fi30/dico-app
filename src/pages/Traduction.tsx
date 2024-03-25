import React from "react";
import { IonButtons, IonContent, IonMenuButton, IonPage } from "@ionic/react";
import TradContent from "../components/Traduction/TradContent";
import { IonsettingsOutline } from "ionicons";

const Traduction: React.FC = () => {
  return (
    <IonPage>
      <IonButtons slot="start">
        <IonMenuButton />
        <IonButtons slot="end"></IonButtons>
      </IonButtons>

      <IonContent fullscreen>
        <TradContent />
      </IonContent>
    </IonPage>
  );
};

export default Traduction;
