import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { Toast } from "primereact/toast";
import { InputTextarea } from "primereact/inputtextarea";
import React, { useRef, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { ADD_RATING } from "../reducers/AppReducer";

const ReviewForm = ({ visible, setVisible, restId }) => {
  const { dispatch } = useAppContext();
  const initialFormData = {
    rating: "",
    comment: "",
  };
  const tost = useRef();

  const [formData, setFormData] = useState(initialFormData);

  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const ratingOptions = [1, 2, 3, 4, 5];

  return (
    <>
      <Toast ref={tost} />
      <Dialog
        header="Add Review"
        visible={visible}
        className="col-4"
        onHide={() => setVisible(false)}
        footer={
          <Button
            label="Submit"
            onClick={() => {
              const isFormEmpty = formData?.rating && formData?.comment.trim();
            
              if (!isFormEmpty) {
                tost.current.show({
                  severity: "warn",
                  summary: "Required",
                  detail: "Add all fields",
                  life: 3000,
                });
                return;
              }
              dispatch({
                type: ADD_RATING,
                payload: { restId, rating: formData?.rating, comment: formData?.comment },
              });
              setFormData(initialFormData);
              setVisible(false);
            }}
          />
        }>
        <form className="form-grid grid ">
          <div className="col-12 flex justify-content-between align-content-center text-xl ">
            <label htmlFor="rating">Rating :</label>
            <br />
            <Dropdown
              id="rating"
              value={formData?.rating}
              onChange={handleFormChange}
              options={ratingOptions}
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
