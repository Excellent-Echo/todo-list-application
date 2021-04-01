import React, { useState } from "react";

// components
import Form from "./Form";

function MapList({ lists, completeLists, deleteLists, updateLists }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  // handle submit update
  const submitUpdate = (value) => {
    console.log("ini value", value);
    console.log("ini edit id", edit.id);
    updateLists(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <Form edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    // tampilkan semua data ke html menggunakan mapping
    <div>
      {lists.map((item, index) => (
        <div key={index}>
          <div key={item.id} onClick={() => completeLists(item.id)}>
            <p>{item.id}</p>
            <h2>{item.text}</h2>
          </div>
          <div>
            <p onClick={() => deleteLists(item.id)}> X Delete</p>
            <p
              onClick={() =>
                setEdit({
                  id: item.id,
                  value: item.text,
                })
              }
            >
              V Update
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MapList;
