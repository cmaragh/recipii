import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
} from "@ionic/react";

const MainFood: React.FC<{ foodToRender: any }> = (props) => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Recipii</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>{props.foodToRender}</IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default MainFood;
