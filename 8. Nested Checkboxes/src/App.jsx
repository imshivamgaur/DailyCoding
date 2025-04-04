import React, { useState } from "react";

const checkBoxLits = [
  {
    id: 1,
    name: "Fruits",
    children: [
      {
        id: 2,
        name: "Citrus",
        children: [
          {
            id: 3,
            name: "Orange",
          },
          {
            id: 4,
            name: "Lemon",
          },
        ],
      },
      {
        id: 5,
        name: "Berries",
        children: [
          {
            id: 6,
            name: "Strawberry",
          },
          {
            id: 7,
            name: "Blueberry",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Animals",
    children: [
      {
        id: 9,
        name: "Mammals",
        children: [
          {
            id: 10,
            name: "Dog",
          },
          {
            id: 11,
            name: "Cat",
          },
        ],
      },
      {
        id: 12,
        name: "Birds",
        children: [
          {
            id: 13,
            name: "Parrot",
          },
          {
            id: 14,
            name: "Eagle",
          },
        ],
      },
    ],
  },
];

const CheckBoxes = ({ data, checked, setChecked }) => {
  // console.log(data);

  const handleOnChange = (isChecked, node) => {
    // console.log("Id", id, "isChecked", e.target.checked);
    setChecked((prev) => {
      const newState = { ...prev, [node.id]: isChecked };

      const updateChildren = (node) => {
        node.children?.forEach((child) => {
          console.log(child);
          newState[child.id] = isChecked;
          child.children && updateChildren(child);
        });
      };
      updateChildren(node);

      return newState;
    });
  };

  return (
    <div className="parent">
      {data.map((node) => (
        <div key={node.id}>
          <input
            type="checkbox"
            onChange={(e) => handleOnChange(e.target.checked, node)}
            checked={checked[node.id] || false}
          />
          <span>{node.name}</span>
          {node.children && (
            <CheckBoxes
              data={node.children}
              checked={checked}
              setChecked={setChecked}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [checked, setChecked] = useState({});
  return (
    <div>
      <h2>Nested Checkbox Machine coding interview Question</h2>
      <CheckBoxes
        data={checkBoxLits}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
};

export default App;
