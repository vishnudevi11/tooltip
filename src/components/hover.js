import React, { useState } from 'react';
import {useValue} from "../buttonContext"


export default function Hover() {
  const [isHovered, setIsHovered] = useState(false);
  const [topV,setTopV]=useState(-10);
  const [leftV,setLeftV]=useState(50);
  const [tran,setTran]=useState("translateY(-30%)");
  const [widthV,setWidthV]=useState("20px");
  const {pos}=useValue();


  // Hover Option
  const handleHover = () => {
    setIsHovered(true);
    if(pos==="Top"){
      setTopV(30);
      setLeftV(0);
      setTran("translateY(-50%)");
      setWidthV("20px")
    }else if(pos==="Bottom"){
      setTopV(100);
      setLeftV(0);
      setTran("translateY(50%)");
      setWidthV("20px")
    }else if(pos==="Left"){
      setTopV(70);
      setLeftV(-190);
      setTran("translateY(50%)");
      setWidthV("20px")
    }else if(pos==="Right"){
      setTopV(60);
      setLeftV(110);
      setTran("translateY(70%)");
      setWidthV("20vw")
    }
  };
//Unhover
  const handleUnhover = () => {
    setIsHovered(false);
  };

  return (
    <div
    
      onMouseEnter={handleHover}
      onMouseLeave={handleUnhover}
      style={{ position: 'relative', display: 'inline-block',paddingTop:'10rem',cursor:'pointer' }}
    >
      <h1>Hover me!!</h1>
      {isHovered && (
        <div
          style={{
            position: 'absolute',
            top: `${topV}%`,
            left: `${leftV}%`,
            transform: {tran},
            background: 'black',
            padding: '1rem',
            border: '1px solid gray',
            borderRadius: '7px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
            width:{widthV},
            color:"white",
            fontWeight:"bold",

          }}
        >
          Thanks for hovering! I am a tooltip.
        </div>
      )}
    </div>
  );
}