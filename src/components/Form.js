import React from "react";

const Form = _ => {
  return (
    <div className="form">
      <form>
        <input name="country" placeholder="country... " type={"text"} />
        <input value={"search"} type={"submit"} />
      </form>
    </div>
  );
};

export default Form;
