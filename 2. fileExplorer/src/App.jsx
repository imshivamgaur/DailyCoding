import { useState } from "react";
import json from "./data.json";


// Render list of Objects
const List = ({ list }) => {
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
              <span onClick={() => addNodeToList()}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1091/1091585.png"
                  alt="icon"
                  className="icon"
                />
              </span>
            )}
          </div>
          {isExpanded?.[node.name] && node?.children && (
            <List list={node.children} />
          )}
        </div>
      ))}
    </div>
  );
};


 
const App = () => {
  const [data, setData] = useState(json);
  // console.log(data);

  return (
    <div>
      <h1>File/Folder Explorer</h1>
      <div className="main">
        <List list={data} />
      </div>
    </div>
  );
};

export default App;
