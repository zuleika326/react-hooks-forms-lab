import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
// import { v4 as uuid } from "uuid";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
  const [nameInput, setNameInput] = useState("")
  const [categoryInput, setCategoryInput] = useState("Produce")
  const itemsToDisplay = items
    .filter((item) => {
      if (selectedCategory === "All") return true;
      return item.category === selectedCategory;
    })
    .filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase())
    })

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleNewCategory(event) {
    setCategoryInput(event.target.value);
  }

  function handleNameChange(event) {
    setNameInput(event.target.value);
  }

  function itemFormSubmit(event) {
    event.preventDefault()

    setItems([
      ...items,
      {
        // id: uuid(),
        name: nameInput,
        category: categoryInput
      }
    ])
  }

  return (
    <div className="ShoppingList">
      <ItemForm
        nameInput={nameInput}
        categoryInput={categoryInput}
        onHandleNewCategory={handleNewCategory}
        onHandleNameChange={handleNameChange}
        onItemFormSubmit={itemFormSubmit}
      />
      <Filter
        onCategoryChange={handleCategoryChange}
        search={search}
        setSearch={setSearch}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
// import React, { useState } from "react";
// import ItemForm from "./ItemForm";
// import Filter from "./Filter";
// import Item from "./Item";

// function ShoppingList({ items }) {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   function handleCategoryChange(event) {
//     setSelectedCategory(event.target.value);
//   }

//   const itemsToDisplay = items.filter((item) => {
//     if (selectedCategory === "All") return true;

//     return item.category === selectedCategory;
//   });

//   return (
//     <div className="ShoppingList">
//       <ItemForm />
//       <Filter onCategoryChange={handleCategoryChange} />
//       <ul className="Items">
//         {itemsToDisplay.map((item) => (
//           <Item key={item.id} name={item.name} category={item.category} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ShoppingList;
