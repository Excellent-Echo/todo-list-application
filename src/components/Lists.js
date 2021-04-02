import React, { useState } from "react";

// components
import Form from "./Form";
import MapLists from "./MapLists";

function List() {
  const [lists, setLists] = useState([]);

  // fungsi menambahkan list
  const addLists = (list) => {
    // console.log("ini list", list);

    // handle jika data kosong maka tidak ditampilkan
    if (!list.text || /^\s*$/.test(list.text)) {
      return;
    }

    // menampung list baru dengan spread operator
    const newList = [list, ...lists];
    // console.log("ini newList", newList);

    // push newList ke state setLists
    setLists(newList);
    // console.log("ini lists", ...lists);
  };

  // fungsi untuk menghapus lists id
  const deleteLists = (id) => {
    // console.log("ini id delete", id);
    const deleteArr = [...lists].filter((list) => list.id !== id);
    // console.log("ini deleteArr", deleteArr);

    // push deleteArr ke state setLists
    setLists(deleteArr);
  };

  // fungsi untuk mengupdate lists id
  const updateLists = (listId, newValue) => {
    // console.log("ini id update", listId);
    // console.log("ini newValue update", newValue);

    // push ke state setlists
    setLists((prev) =>
      // jika id sama dengan paramter id maka true value baru jika tidak maka tetap value lama
      prev.map((item) => (item.id === listId ? newValue : item))
    );
  };

  // fungsi untuk update lists id
  const completeLists = (id) => {
    console.log("ini id complete", id);

    // Mapping semua data lists
    let updateList = lists.map((list) => {
      if (list.id === id) {
        list.isComplete = !list.isComplete;
      }
      return list;
    });
    console.log("ini updateList", updateList);

    // push ke state setLists
    setLists(updateList);
  };

  // update total
  const updateTotal = () => {
    console.log("ini length update", completeLists.length);
    return completeLists.length;
  };

  // total list
  const listTotal = () => {
    return lists.length;
  };

  return (
    <div>
      <Form onSubmit={addLists} />
      <MapLists
        lists={lists}
        completeLists={completeLists}
        deleteLists={deleteLists}
        updateLists={updateLists}
        listTotal={listTotal}
        updateTotal={updateTotal}
      />
    </div>
  );
}

export default List;
