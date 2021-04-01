import React, { useState } from "react";

function Form(props) {
  const [input, setInput] = useState("");

  // handle change value
  const handleChange = (e) => {
    setInput(e.target.value);
    // console.log("target value", e.target.value);
  };

  // handle form
  const handleForm = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Input your to do"
          name="text"
          value={input}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default Form;
