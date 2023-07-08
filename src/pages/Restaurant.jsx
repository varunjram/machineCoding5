import React from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { Avatar } from "primereact/avatar";

const Restaurant = () => {
  const { restId } = useParams();
  const { cuisineData, restaurantsData, selectedCuisine, dispatch } = useAppContext();

  const FindRestaurant = restaurantsData.find((restaurant) => restaurant?.id === Number(restId));
  const {
    id,
    name: restaurantName,
    cuisine_id,
    address,
    phone,
    menu,
    description,
    averageRating,
    ratings,
  } = FindRestaurant || {};
  const primeClass = 1;
  return (
    <div className="col-9 m-auto">
      <section className="flex justify-content-between">
        <div>
          <h1 className="m-0 mb-2">{restaurantName}</h1>
          <p className="m-1 text-gray-500">{address}</p>
          <p className="m-1 text-gray-500">Average Rating : {averageRating}</p>
        </div>
        <Button
          label="Add Review"
          className="align-self-center"
        />
      </section>
      <Divider />
      <h2>Reviews</h2>
      <div className="col-11 m-auto">
        {ratings?.map((review) => {
          const { rating, comment, revName, pp } = review || {};
          return (
            <>
              <div className="flex justify-content-between ">
                <div className="flex">
                  <Avatar
                    image={pp}
                    size="large"
                    shape="circle"
                    className="mr-2"
                  />
                  <h4 className="m-0 align-self-center">{revName}</h4>
                </div>
                <Button
                  icon="bi bi-star-fill"
                  text
                  label={rating}
                />
              </div>
              <p>{comment}</p>
              <Divider />
            </>
          );
        })}
      </div>
      <pre>{JSON.stringify(restId, null, 2)}</pre>
      <pre>{JSON.stringify(FindRestaurant, null, 2)}</pre>
    </div>
  );
};

export default Restaurant;
