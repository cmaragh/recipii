import React from "react";
import { IonRadioGroup, IonItem, IonLabel, IonRadio } from "@ionic/react";

const DietOptions: React.FC<{
  dietFilterHandler: (filter: string) => void;
  dietFilter: any;
  foodLoadedHandler: (bool: boolean) => void;
}> = (props) => {
  const passDietFilter = (event: CustomEvent) => {
    props.dietFilterHandler(event.detail.value);
    props.foodLoadedHandler(false);
  };

  const dietOptions = [
    "Gluten Free",
    "Ketogenic",
    "Vegetarian",
    "Lacto-Vegetarian",
    "Ovo-Vegetarian",
    "Vegan",
    "Pescetarian",
    "Paleo",
    "Primal",
    "Whole30",
  ].map((option) => {
    return (
      <IonItem>
        <IonLabel>{option}</IonLabel>
        <IonRadio slot="start" value={option} />
      </IonItem>
    );
  });

  return (
    <IonRadioGroup
        allowEmptySelection
        value={props.dietFilter}
        onIonChange={passDietFilter}>
      {dietOptions}
    </IonRadioGroup>
  );
};

export default DietOptions;
