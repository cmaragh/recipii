import React, { useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonTab,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonCol,
  IonCard,
  IonCardTitle,
} from "@ionic/react";
import { fastFoodOutline } from "ionicons/icons";
import { pencilOutline } from "ionicons/icons";
import { IonReactRouter } from "@ionic/react-router";
import MainFood from "./pages/MainFood";
import Food from "./pages/Food";
import EditFood from "./pages/EditFood";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {
  const [mainFood, setMainFood] = useState<any>([{title: 'Chicken', id: '2743'}]);
  const [foodLoaded, setFoodLoaded] = useState<boolean>(false);
  const [cuisineFilter, setCuisineFilter] = useState<string>("");
  const [dietFilter, setDietFilter] = useState<string>("");

  useEffect(() => {
    if (!foodLoaded) {
      const randomNumber = Math.floor(Math.random() * 500);
      fetch(
        `https://api.spoonacular.com/recipes/search?apiKey=a883b7a4008e495a830a44a65b2ee19a&number=16&cuisine=${cuisineFilter}&offset=${randomNumber}&diet=${dietFilter}`
      )
        .then((res) => res.json())
        .then((data) => setMainFood(data.results))
        .then(() => setFoodLoaded(true));
    }
  }, [foodLoaded, cuisineFilter, dietFilter]);

  const cuisineFilterHandler = (filter: any) => {
    if (filter) {
      setCuisineFilter(filter);
    } else {
      setCuisineFilter("");
    }
  };

  const dietFilterHandler = (filter: string) => {
    if (filter) {
      setDietFilter(filter);
    } else {
      setDietFilter("");
    }
  };

  const foodLoadedHandler = (bool: boolean) => {
    setFoodLoaded(bool);
  };

  let foodToRender = "Loading Recipes...";
  if (foodLoaded) {
    foodToRender = mainFood.map((food: any) => {
      return (
        <IonCol size="6">
          <IonCard href={`/food/${food.id}`}>
            <IonCardTitle className="ion-text-center">
              {food.title}
            </IonCardTitle>
            <img
              src={`https://spoonacular.com/recipeImages/${food.id}-312x231.jpg`}
              alt=""
            ></img>
          </IonCard>
        </IonCol>
      );
    });
  }

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/mainfood">
              <MainFood foodToRender={foodToRender} />
            </Route>
            <Route exact path="/food/:foodId">
              <Food />
            </Route>
            <Route exact path="/editfood">
              <EditFood
                cuisineFilterHandler={cuisineFilterHandler}
                cuisineFilter={cuisineFilter}
                dietFilterHandler={dietFilterHandler}
                dietFilter={dietFilter}
                foodLoadedHandler={foodLoadedHandler}
              />
            </Route>
            <Redirect path="/" to="/mainfood" exact />
          </IonRouterOutlet>
          <IonTabBar slot="bottom" color="primary">
            <IonTabButton tab="main" href="/mainfood">
              <IonIcon icon={fastFoodOutline} />
            </IonTabButton>
            <IonTabButton tab="edit" href="/editfood">
              <IonIcon icon={pencilOutline} />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
