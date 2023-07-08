import React from "react";
import { useAppContext } from "../context/AppContext";
import { Button } from "primereact/button";
import RestaurantDisplayCard from "../components/RestaurantDisplayCard";
import { SELECT_CUISINE } from "../reducers/AppReducer";

export default function Home() {
  const { cuisineData, restaurantsData, selectedCuisine, dispatch } = useAppContext();

  const FindRestaurantByCuisine = restaurantsData.find(
    (restaurant) => restaurant?.cuisine_id === selectedCuisine?.id
  );

  return (
    <div className="text-center">
      <h1>Review Restaurants App</h1>
      <div className="col-4 flex justify-content-between m-auto">
        {cuisineData?.map((cuisine) => {
          const { name } = cuisine;
          return (
            <Button
              label={name}
              className=""
              onClick={() => dispatch({ type: SELECT_CUISINE, payload: cuisine })}
            />
          );
        })}
      </div>
      {selectedCuisine && <RestaurantDisplayCard restaurant={FindRestaurantByCuisine} />}
    </div>
  );
}
