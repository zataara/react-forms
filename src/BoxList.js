import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import {v4 as uuid } from "uuid";


const BoxList = () => {
  const[boxes, setBoxes] = useState([]);

  const renderBoxes = () => {
    return (
      <div>
        {boxes.map(box => (
          <Box backgroundColor={box.backgroundColor} width={box.width} height={box.height} />
        ))}
      </div>
    );
  };
  
  const addBox = box => {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox])
  }
  
  
  return (
    <div>
      <NewBoxForm addBox={addBox}/>
      {renderBoxes()}
    </div>
  );
};

export default BoxList;
