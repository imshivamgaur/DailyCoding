import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Accordian = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    console.log(index);
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordian-div">
      {items.length == 0 ? (
        <div style={{ fontSize: "30px", fontWeight: "bold" }}>No Items available</div>
      ) : (
        items.map((item, index) => (
          <div className="accordian-style" key={index}>
            <div className="heading" onClick={() => handleToggle(index)}>
              {item.title}
              <div>
                {openIndex === index ? (
                  <MdKeyboardArrowUp size={32} />
                ) : (
                  <MdKeyboardArrowDown size={32} />
                )}
              </div>
            </div>
            {openIndex === index && <p>{item.content}</p>}
          </div>
        ))
      )}
    </div>
  );
};

export default Accordian;
