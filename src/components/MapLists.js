import React, { useState } from "react";

// components
import Form from "./Form";

// css
import "../styles/Maplist.css";

function MapList({
  lists,
  completeLists,
  deleteLists,
  updateLists,
  listTotal,
}) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  console.log("Ini lists di Maplists", lists);

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
      <h1>Belajar</h1>
      <h1>Rumah</h1>
      <h1>Kerja</h1>
      {lists.map((item, index) => (
        <div key={index}>
          <div key={item.id} onClick={() => completeLists(item.id)}>
            <div className={item.isComplete ? "todo-row complete" : "todo-row"}>
              <p>{item.id}</p>
              <p>{item.kategori}</p>
              <h2>{item.text}</h2>
            </div>
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
      <div>
        <h2>progress </h2>
        <h2>Done</h2>
        <h2>Total {listTotal()}</h2>
      </div>
    </div>
  );
}

export default MapList;
