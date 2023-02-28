import React, { useState, useEffect } from "react"; 

const OptionButtons = ({ 
  name,
  selected,
  setSelected,  
  svg = true,
  setDropdown,
  value
}:any) => {
  const [svgFill, setSvgFill] = useState("#000"); 
 
 
  //Handle CLick event
  const handleClick = () => {
    setSelected({
      title: name,
      id: value
    });
    setDropdown(false)
  };

  return (
    <div
      className=" w-full  2xl:w-1/2 px-2 py-2"
    >
      <div
        style={{ borderRadius: "7px" }} 
        onClick={handleClick}
        className={`
            w-full border py-4 px-3 transition ease-linear duration-200
            hover:border-topset-100 cursor-pointer hover:text-topset-100
            inline-flex justify-between ${selected
            ? "border-topset-100   "
            : "border-ash-300 text-brown-50"
          }
             `}
      > 
          <h3 className="px-4 text-sm text-center w-full uppercase">{name}</h3>
 
      </div>
    </div>
  );
};


export default OptionButtons;
