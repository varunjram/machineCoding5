import React from "react";

const RestaurantDisplayCard = ({ restaurant }) => {
  const { id, name:restaurantName, cuisine_id, address, phone, menu, description, averageRating, ratings } =
    restaurant || {};
  return (
    <div className="col-10 m-auto ">
      <h1 className="text-left">Dishes by {restaurantName} </h1>
      <section className="grid justify-content-around">
        {menu?.map((item, i) => {
          const { name, imgSrc, price, qty } = item || {};
          return (
            <article
              className="col-2 p-0 overflow-hidden border-round-lg   "
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              }}>
              <div className="">
                <img
                  src={imgSrc}
                  alt="menuitem"
                  className="w-full h-full"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="ml-2 text-left">
                <h3 className="m-1">name</h3>
                <p className="m-1  text-gray-500">Rs </p>
                <p className="m-1  text-gray-500">restaurantName</p>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default RestaurantDisplayCard;
