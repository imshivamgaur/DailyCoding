import { useState } from "react";
import json from "./data.json";

// Render list of Objects
const List = ({ list, addNodeToList, removeNodeToList }) => {
  const [isExpanded, setIsExpanded] = useState({});

  return (
    <div className="container">
      {list.map((node, index) => (
        <div key={index}>
          <div>
            {node.isFolder && (
              <span
                onClick={() =>
                  setIsExpanded((prev) => ({
                    ...prev,
                    [node.name]: !prev[node.name],
                  }))
                }
                style={{ cursor: "pointer" }}
              >
                {isExpanded?.[node.name] ? "📂" : "📁"}
              </span>
            )}
            <span>{node.name}</span>

            {node.isFolder && (
              <span onClick={() => addNodeToList(node.id)}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1091/1091585.png"
                  alt="icon"
                  className="icon"
                />
              </span>
            )}
            <span onClick={() => removeNodeToList(node.id)}>
              <img
                className="icon"
                src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                alt=""
              />
            </span>
          </div>
          {isExpanded?.[node.name] && node?.children && (
            <List
              list={node.children}
              addNodeToList={addNodeToList}
              removeNodeToList={removeNodeToList}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [data, setData] = useState(json);
  // console.log(data);

  const addNodeToList = (parentId) => {
    // console.log(parentId);
    const name = prompt("Enter name");
    // Updating the tree
    const updateTree = (list) => {
      return list.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [
              ...node.children,
              {
                id: Date.now().toString(), // Unique ID
                name: name,
                isFolder: true,
                children: [],
              },
            ],
          };
        }

        if (node.children) {
          return { ...node, children: updateTree(node.children) };
        }
        return node;
      });
    };
    setData((prev) => updateTree(prev));
  };

  const removeNodeToList = (itemId) => {
    // updating the tree
    const updateTree = (list) => {
      return list
        .filter((node) => node.id !== itemId)
        .map((node) => {
          if (node.children) {
            return { ...node, children: updateTree(node.children) };
          }
          return node;
        });
    };

    setData((prev) => updateTree(prev));
  };

  return (
    <div>
      <h1>File/Folder Explorer</h1>
      <div className="main">
        <List
          list={data}
          addNodeToList={addNodeToList}
          removeNodeToList={removeNodeToList}
        />
      </div>
    </div>
  );
};

export default App;
