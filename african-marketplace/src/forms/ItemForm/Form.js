import React from "react";
import "./Form.css";

function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    change(name, value);
  };

  return (
    <form className="formContainer" onSubmit={onSubmit}>
      <div className="header">
        <h1>Submit Your Item</h1>
      </div>
      <div>
        {/* DROPDOWN */}
        <div className="location">
          <label>
            {" "}
            Location&nbsp;
            <select value={values.location} onChange={onChange} name="location">
              <option value="">-- Select an Location --</option>
              <option value="Algeria">Algeria</option>
              <option value="Angola">Angola</option>
              <option value="Benin">Benin</option>
              <option value="Botswana">Botswana</option>
              <option value="Burkina">Burkina</option>
              <option value="Faso">Faso</option>
            </select>
          </label>
        </div>
        {/* TEXT INPUTS */}
        <div className="itemName">
          <label>
            Item Name&nbsp;
            <input
              value={values.name}
              onChange={onChange}
              name="name"
              type="text"
            />
          </label>
        </div>
        <div className="description">
          <label>
            Description&nbsp;
            <input
              value={values.description}
              onChange={onChange}
              name="description"
              type="text"
            />
          </label>
        </div>
        <div className="price">
          <label>
            Price&nbsp;
            <input
              value={values.price}
              onChange={onChange}
              name="itemcost"
              type="text"
            />
          </label>
        </div>
      </div>
      <div>
        <button id="addItem" disabled={disabled}>
          Add Item
        </button>
      </div>
      <div className="errorsContainer">
        <div className="errorLocation">{errors.location}</div>
        <div className="errorItemName">{errors.name}</div>
        <div className="errorDescription">{errors.description}</div>
        <div className="errorPrice">{errors.itemcost}</div>
      </div>
    </form>
  );
}

export default Form;
