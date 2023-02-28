import React, { useState, useEffect, useRef } from "react";
import OptionButtons from "./OptionButtons";
import SelectedButton from "./SelectedButton";


const SelectInput = ({
    options,
    setSelected,
    selected,
    error, 
    label,
    isLabel = true,
    labelFor, 
}: any) => {
    const dropdownRef = useRef<any>(null);
    const dropdownChildRef = useRef(null)
    const [dropdown, setDropdown] = useState(false);

    //handle clicking outside dropdown
    const handleDropdownCLick = (e: any) => {
        if (dropdownRef?.current && dropdownRef.current.contains(e.target)) {
            //do nothing
            return;
        }
        //set dropdown to fasle
        setDropdown(false);
    };

    //add listener for clicking outside dropdown.
    useEffect(() => {
        document.addEventListener("mousedown", handleDropdownCLick);
        return () => {
            document.removeEventListener("mousedown", handleDropdownCLick);
        };
    }, []);


    return (
        <div
            ref={dropdownRef}
            style={{ borderRadius: "15px" }}
            className={` cursor-pointer ${dropdown ? "border-gray-400" : "border-gray-200"}
        ${error ? " border-red-600" : ""}
        inline-flex w-full justify-between border  py-3 px-4 relative`}
        >
            <div className="w-3/4 flex flex-wrap"
                onClick={() => setDropdown(!dropdown)}>
                {isLabel && (
                    <label
                        htmlFor={labelFor}
                        className={` font-bold w-full ${error ? "text-red-400" : "text-topset-100"
                            }`}
                    >
                        {label}
                    </label>
                )}
                <div className="w-full inline-flex flex-wrap pt-2">
                    {Object.values(selected).length ? (
                        <SelectedButton title={selected.title} />
                    ) : (
                        <p className="text-xs text-ash-400">  </p>
                    )}
                </div>
            </div>
            <div className="w-1/4 flex justify-end items-center">
                <button
                    type="button"
                    onClick={() => setDropdown(!dropdown)}
                    className="  transition ease-linear duration-200 flex outline-none
                      items-center justify-center bg-ash-100 hover:bg-ash-200
                      text-white h-8 w-8 rounded-full focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="10"
                        fill="none"
                        viewBox="0 0 6 5"
                    >
                        <path stroke={error ? "#341A64" : "#665D87"} d="M0.337 1.232L2.961 3.631"></path>
                        <path stroke={error ? "#341A64" : "#665D87"} d="M5.359 1.511L2.78 4.178"></path>
                    </svg>
                </button>
            </div>
            {dropdown && (
                <div
                    ref={dropdownChildRef}
                    style={{
                        borderRadius: "15px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                        maxHeight: "25vh",
                        overflow: "scroll",
                        marginBottom: "10vh"
                    }}
                    className="  w-full py-4 bg-white flex flex-wrap absolute top-16 left-0 z-30 px-4"
                >
                    {options.map((option: any) => (
                        <OptionButtons
                            key={option.id}
                            name={option.title}
                            value={option.id}
                            selected={selected.id === option.id}
                            setSelected={setSelected}
                            setDropdown={setDropdown}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SelectInput;
