import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useAppContext } from "../context/AppContext";
import { ADD_COMMENT, ADD_RATING } from "../reducers/AppReducer";

const ReviewForm = ({ visible, setVisible, restId }) => {
  const { cuisineData, restaurantsData, selectedCuisine, dispatch } = useAppContext();
  const initialFormData = {
    rating: "",
    comment: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const submitHandler = (encrypted) => {};

  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const ratingOptions = [1, 2, 3, 4, 5];

  return (
    <>
      <Dialog
        header="Add Review"
        visible={visible}
        className="col-4"
        // style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
        footer={
          <Button
            label="Submit"
            onClick={() => {
              dispatch({
                type: ADD_RATING,
                payload: { restId, rating: formData?.rating, comment: formData?.comment },
              });
              setFormData(initialFormData);
              setVisible(false);
            }}
          />
        }>
        <form
          onSubmit={submitHandler}
          className="form-grid grid ">
          <div className="col-12 flex justify-content-between align-content-center text-xl ">
            <label htmlFor="rating">Rating :</label>
            <br />
            <Dropdown
              id="rating"
              value={formData?.rating}
              onChange={handleFormChange}
              options={ratingOptions}
              // optionLabel="name"
              placeholder="Select a Rating"
              className="w-full md:w-14rem"
            />
          </div>
          <div className="col-12  justify-content-between align-content-center text-xl ">
            <label htmlFor="comment">Comment :</label>
            <br />
            <InputTextarea
              id="comment"
              value={formData?.comment}
              onChange={handleFormChange}
            />
          </div>
        </form>
      </Dialog>
    </>
  );
};

export default ReviewForm;
