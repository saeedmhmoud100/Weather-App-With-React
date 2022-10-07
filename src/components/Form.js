import React from "react";

const Form = props => {
  return (
    <div className="form">
      <form onSubmit={props.onSubmit}>
        <input name="country" placeholder="country... " type={"text"} />
        <input value={"search"} type={"submit"} />
      </form>
    </div>
  );
};

export default Form;
