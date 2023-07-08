import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CommentCard from "../components/CommentCard";
import { useAppContext } from "../context/AppContext";
import ReviewForm from "../components/ReviewForm";

const Restaurant = () => {
  const { restId } = useParams();
  const { cuisineData, restaurantsData, selectedCuisine, dispatch } = useAppContext();
  const [visible, setVisible] = useState(false);

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
      <ReviewForm
        visible={visible}
        setVisible={setVisible}
        restId={id}
      />
      <section className="flex justify-content-between">
        <div>
          <h1 className="m-0 mb-2">{restaurantName}</h1>
          <p className="m-1 text-gray-500">{menu.map((item) => item.name).join(",")} </p>
          <p className="m-1 text-gray-500">{address}</p>
          <p className="m-1 text-gray-500">Average Rating : {averageRating}</p>
        </div>
        <Button
          label="Add Review"
          className="align-self-center"
          onClick={() => setVisible(true)}
        />
      </section>
      <Divider />
      <h2>Reviews</h2>
      <div className="col-11 m-auto">
        {ratings?.map((review) => (
          <CommentCard review={review} />
        ))}
      </div>
      <pre>{JSON.stringify(restId, null, 2)}</pre>
      <pre>{JSON.stringify(FindRestaurant, null, 2)}</pre>
    </div>
  );
};

export default Restaurant;
