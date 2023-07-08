import React from "react";
import { useNavigate } from "react-router-dom";

const RestaurantDisplayCard = ({ restaurant }) => {
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
  } = restaurant || {};

  const Navigation = useNavigate();
  return (
    <div className="col-10 m-auto ">
      <h1
        className="text-left"
        onClick={() => Navigation("")}>
        Dishes by {restaurantName}{" "}
      </h1>
      <section className="grid justify-content-around">
        {menu?.map((item, i) => {
          const { name, imgSrc, price, qty } = item || {};
          return (
            <article
              className="w-16rem p-0 overflow-hidden border-round-lg   "
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              }}>
              <div className="h-12rem">
                <img
                  src={imgSrc}
                  alt="menuitem"
                  className="w-full h-full"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="ml-2 text-left">
                <h3 className="m-1">{name}</h3>
                <p className="m-1  text-gray-500">
                  Rs {price} for {qty}
                </p>
                <p className="m-1  text-gray-500">{restaurantName}</p>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default RestaurantDisplayCard;
