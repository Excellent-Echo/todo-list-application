import React, { useState } from "react";

function Form(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [category, setCategory] = useState("");
  console.log("input", input)
  console.log("category", category)


  // handle change value
  const handleChange = (e) => {
    setInput(e.target.value);
    console.log("target value handle change", e.target.value);
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
      {/* form */}
      <form onSubmit={handleForm}>
        {/*  input button update */}
        {props.edit ? (
          <>
            <label>Ganti List Baru: </label>
            <input
              className="relative py-1 px-2 pr-10 w-full bg-red-700 rounded shadow outline-none text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Update list"
              name="text"
              value={input}
              onChange={handleChange}
            />
            <label>Ganti Kategori Baru: </label>
            <select
              className="relative py-1 px-2 pr-10 w-full bg-red-700 rounded shadow outline-none text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline m-2"
              onChange={(e) => {
                const seletedCategory = e.target.value;
                // console.log("ini seletedCategory", seletedCategory);
                setCategory(seletedCategory);
              }}
            >
              <option value="belajar">Belajar</option>
              <option value="rumah">Rumah</option>
              <option value="kerja">Kerja</option>
            </select>
            <button className="rounded bg-red-500 hover:bg-blue-700 py-2 px-4 text-white m-6">
              Update
            </button>
          </>
        ) : (
          <>
            {/* input button add */}
            <input
              className="relative outline-none rounded py-4 px-3 w-full bg-gray-100 shadow text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Input Your To Do List!"
              name="text"
              value={input}
              onChange={handleChange}
            />
            <label>Pilih Kategori: </label>
            <select
              className="relative outline-none rounded py-1 px-2 w-full bg-gray-300 shadow text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"
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
            <button className="rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white m-2.5 mb-10">
              Add List
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default Form;
