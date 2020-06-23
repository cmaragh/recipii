import React, { useState } from "react";
import {
  IonItem,
  IonLabel,
  IonCheckbox,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

const CuisineOptions: React.FC<{
  cuisineFilterHandler: (filter: string) => void;
  cuisineFilter: any;
  foodLoadedHandler: (bool: boolean) => void;
}> = (props) => {
  const [currentFilter, setCurrentFilter] = useState<any>(
    props.cuisineFilter.split(",")
  );

  const passCuisineFilter = (event: CustomEvent) => {
    let tempFilter = [...currentFilter];
    let index = tempFilter.indexOf(event.detail.value);
    if (tempFilter.includes(event.detail.value)) {
      tempFilter.splice(index, 1);
    } else {
      tempFilter.push(event.detail.value);
    }
    setCurrentFilter(tempFilter);

    props.cuisineFilterHandler(tempFilter.join(","));
    props.foodLoadedHandler(false);
  };

  const cuisineOptions = [
    "African",
    "American",
    "British",
    "Cajun",
    "Caribbean",
    "Chinese",
    "Eastern European",
    "European",
    "French",
    "German",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Japanese",
    "Jewish",
    "Korean",
    "Latin American",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "Southern",
    "Spanish",
    "Thai",
    "Vietnamese",
  ].map((option) => {
    return (
      <IonCol size="6">
        <IonItem>
          <IonLabel className="ion-text-wrap">{option}</IonLabel>
          <IonCheckbox
            slot="start"
            value={option}
            onIonChange={passCuisineFilter}
            checked={currentFilter.includes(option)}
          />
        </IonItem>
      </IonCol>
    );
  });

  return (
    <IonGrid>
      <IonRow>{cuisineOptions}</IonRow>
    </IonGrid>
  );
};

export default CuisineOptions;
