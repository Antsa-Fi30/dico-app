import React from "react";
import { IonButtons, IonContent, IonMenuButton, IonPage } from "@ionic/react";

const Favorites: React.FC = () => {
  return (
    <IonPage>
      <IonButtons slot="start">
        <IonMenuButton />
      </IonButtons>

      <IonContent fullscreen>Favorites</IonContent>
    </IonPage>
  );
};

export default Favorites;
