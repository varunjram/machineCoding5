import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CommentCard from "../components/CommentCard";
import ReviewForm from "../components/ReviewForm";
import { useAppContext } from "../context/AppContext";

const Restaurant = () => {
  const { restId } = useParams();
  const { restaurantsData } = useAppContext();
  const [visible, setVisible] = useState(false);
  const Navigate = useNavigate("");

  const FindRestaurant = restaurantsData.find((restaurant) => restaurant?.id === Number(restId));
  const {
    id,
    name: restaurantName,
    address,
    phone,
    menu,
    description,
    averageRating,
    ratings,
  } = FindRestaurant || {};
  return (
    <>
      <Button
        icon="bi bi-arrow-left"
        text
        className="text-5xl absolute top-0 lg:ml-3"
        onClick={() => Navigate("/")}
      />
      <div className="col-9 m-auto">
        <ReviewForm
          visible={visible}
          setVisible={setVisible}
          restId={id}
        />
        <section className=" sm:block lg:flex justify-content-between">
          <div>
            <h1 className="m-0 mb-2">
              {restaurantName} <span className="text-sm text-color-secondary">{description}</span>
            </h1>
            <p className="m-1 text-gray-500">Menu : {menu.map((item) => item.name).join(",")} </p>
            <p className="m-1 text-gray-500">
              Address : {address} Phone:{phone}
            </p>
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
      </div>
    </>
  );
};

export default Restaurant;
