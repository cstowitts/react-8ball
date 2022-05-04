import { useState } from "react";
import Box from "./Box";
import "./Boxes.css";
import Button from "./Button";
import { randomRGB } from "./libs";

/** Boxes component
 * 
 * no props
 * 
 * state:
 *  
 * 
 * App -> Boxes -> Box
 */

function Boxes() {
  
  function changeRandomBoxColor(){
    const randomBoxIdx = Math.floor(Math.random() * boxColors.length);

    const newBoxColors = [...boxColors];
    newBoxColors[randomBoxIdx] = randomRGB();
    setBoxColors(newBoxColors);
  }

  const initialBoxColors = Array.from({length: 16}).map(randomRGB);
  
  const [boxColors, setBoxColors] = useState(initialBoxColors);

  return (
    <div className="Boxes" role="boxes">
      <div className="boxes-container">
      {
        boxColors.map((color, idx) => <Box key={idx} color={color} className="Box"/>)
      }
      </div>
      <Button label={"Change a box!"} onClick={changeRandomBoxColor} />
    </div>
  )
}

export default Boxes;