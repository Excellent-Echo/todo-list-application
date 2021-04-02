import React, { useState } from "react";

// components
import Form from "./Form";

// css
import "./MapLists.css";

function MapList({
  lists,
  completeLists,
  deleteLists,
  updateLists,
  listTotal,
  updateTotal,
}) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  // console.log("Ini lists di Maplists", lists);

  // filter kategori
  const kategoriBelajar = lists.filter((item) => item.kategori === "belajar");
  const kategoriRumah = lists.filter((item) => item.kategori === "rumah");
  const kategoriKerja = lists.filter((item) => item.kategori === "kerja");
  // console.log("ini data kategori", kategoriBelajar);

  // handle submit update
  const submitUpdate = (value) => {
    // console.log("ini value", value);
    // console.log("ini edit id", edit.id);
    updateLists(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  // props dari components form.js
  if (edit.id) {
    return <Form edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {/* kategori belajar */}
        <div>
          <div className="bg-gray-600 rounded-2xl">
            <p className="text-xl ">Belajar</p>
            <h1 className="italic text-white">
              Progress: {kategoriBelajar.length}
            </h1>
            <h1 className="italic text-white">Done: 5</h1>
          </div>
          <div>
            {kategoriBelajar.map((item, index) => (
              <div key={index}>
                <div>
                  <div
                    className={
                      item.isComplete
                        ? "todo-row complete bg-gray-600"
                        : "todo-row bg-gray-600"
                    }
                  >
                    <input
                      type="checkbox"
                      key={item.id}
                      onClick={() => completeLists(item.id)}
                    />

                    {/* <p key={item.id} onClick={() => completeLists(item.id)}>
                      <strong>id:</strong> {item.id}
                    </p> */}
                    <p>
                      <strong>id:</strong> {item.id}
                    </p>
                    <p>
                      <strong className="from-black">Kategori: </strong>
                      {item.kategori}
                    </p>
                    <h2>{item.text}</h2>
                    <button
                      onClick={() => deleteLists(item.id)}
                      className="rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white m-1.5"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() =>
                        setEdit({
                          id: item.id,
                          value: item.text,
                        })
                      }
                      className="rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* kategori rumah */}
        <div>
          <div className="bg-red-600 rounded-2xl">
            <p className="text-xl ">Rumah</p>
            <h1 className="italic text-white">
              Progress: {kategoriRumah.length}
            </h1>
            <h1 className="italic text-white">Done: 5</h1>
          </div>
          <div>
            {kategoriRumah.map((item, index) => (
              <div key={index}>
                <div>
                  <div
                    className={
                      item.isComplete
                        ? "todo-row complete bg-red-600"
                        : "todo-row bg-red-600"
                    }
                  >
                    <input
                      type="checkbox"
                      key={item.id}
                      onClick={() => completeLists(item.id)}
                    />
                    <p>
                      <strong>id:</strong> {item.id}
                    </p>
                    <p>
                      <strong className="from-black">Kategori: </strong>
                      {item.kategori}
                    </p>
                    <h2>{item.text}</h2>
                    <button
                      onClick={() => deleteLists(item.id)}
                      className="rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white m-1.5"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() =>
                        setEdit({
                          id: item.id,
                          value: item.text,
                        })
                      }
                      className="rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* kategori kerja */}
        <div>
          <div className="bg-yellow-600 rounded-2xl">
            <p className="text-xl ">Kerja</p>
            <h1 className="italic text-white">
              Progress: {kategoriKerja.length}
            </h1>
            <h1 className="italic text-white">Done: 5</h1>
          </div>
          <div>
            {kategoriKerja.map((item, index) => (
              <div key={index}>
                <div>
                  <div
                    className={
                      item.isComplete
                        ? "todo-row complete bg-yellow-600 "
                        : "todo-row bg-yellow-600 "
                    }
                  >
                    <input
                      type="checkbox"
                      key={item.id}
                      onClick={() => completeLists(item.id)}
                    />
                    <p>
                      <strong>id:</strong> {item.id}
                    </p>
                    <p>
                      <strong className="from-black">Kategori: </strong>
                      {item.kategori}
                    </p>
                    <h2>{item.text}</h2>
                    <button
                      onClick={() => deleteLists(item.id)}
                      className="rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white m-1.5"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() =>
                        setEdit({
                          id: item.id,
                          value: item.text,
                        })
                      }
                      className="rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Data hasil */}
      <div className="space-y-4 bg-red-500 mt-14">
        <span className="block text-red-100 text-2xl">
          <strong>Progress:</strong> {listTotal()}
        </span>
        <span className="block text-red-100 text-2xl">
          <strong>Done: {updateTotal()}</strong>
        </span>
        <span className="block text-red-100 text-2xl">
          <strong>Total:</strong> {listTotal()}
        </span>
      </div>
    </div>
  );
}

export default MapList;
