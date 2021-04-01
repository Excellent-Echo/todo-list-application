import React, { useState } from "react";

function Form(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [category, setCategory] = useState("");

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
      kategori: category,
    });
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        {props.edit ? (
          <>
            <input
              type="text"
              placeholder="Update list"
              name="text"
              value={input}
              onChange={handleChange}
            />
            <select
              onChange={(e) => {
                const seletedCategory = e.target.value;
                console.log("ini seletedCategory", seletedCategory);
                setCategory(seletedCategory);
              }}
            >
              <option value="belajar">Belajar</option>
              <option value="rumah">Rumah</option>
              <option value="kerja">Kerja</option>
            </select>
            <button>Update</button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Input your to do"
              name="text"
              value={input}
              onChange={handleChange}
            />
            <select
              onChange={(e) => {
                const seletedCategory = e.target.value;
                console.log("ini seletedCategory", seletedCategory);
                setCategory(seletedCategory);
              }}
            >
              <option value="belajar">Belajar</option>
              <option value="rumah">Rumah</option>
              <option value="kerja">Kerja</option>
            </select>
            <button>Add</button>
          </>
        )}
      </form>
    </div>
  );
}

export default Form;
