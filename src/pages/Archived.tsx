import React, { useState, useEffect } from "react";
import { IonButtons, IonContent, IonMenuButton, IonPage } from "@ionic/react";

const Archived: React.FC = () => {
  const [state, setState] = useState("");

  useEffect(() => {
    console.log("useEffect effect");

    return () => {
      console.log("annule");
    };
  }, []);

  return (
    <IonPage>
      <IonButtons slot="start">
        <IonMenuButton />
      </IonButtons>
      <IonContent fullscreen>Archived</IonContent>
    </IonPage>
  );
};

export default Archived;
