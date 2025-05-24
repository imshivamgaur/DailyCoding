import Accordian from "./components/Accordian.jsx";

const App = () => {
  const items = [
    {
      title: "React",
      content:
        "React is a JavaScript library used to build user interfaces with reusable components.",
    },
    {
      title: "JavaScript",
      content:
        "JavaScript is a high-level programming language that enables interactive web pages and dynamic content.",
    },
    {
      title: "Node.js",
      content:
        "Node.js is a JavaScript runtime built on Chrome's V8 engine, used to build fast and scalable server-side applications.",
    },
    {
      title: "Express.js",
      content:
        "Express.js is a minimal and flexible Node.js web application framework that provides robust features for web and API development.",
    },
    {
      title: "MongoDB",
      content:
        "MongoDB is a NoSQL database that stores data in JSON-like documents, known for its scalability and flexibility.",
    },
  ];

  return (
    <>
      <div className="main-div">
        <Accordian items={items} />
      </div>
    </>
  );
};

export default App;
