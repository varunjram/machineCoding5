import React from "react";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { Avatar } from "primereact/avatar";

const CommentCard = ({ review }) => {
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
          <h4 className="m-0 align-self-center text-lg">{revName}</h4>
        </div>
        <Button
          icon="bi bi-star-fill"
          label={rating}
          iconPos="right"
          outlined
          className="p-1 align-self-center"
        />
      </div>
      <p className="text-lg">{comment}</p>
      <Divider />
    </>
  );
};

export default CommentCard;
