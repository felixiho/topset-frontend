/* eslint-disable react/prop-types */
import React, { ChangeEvent, useEffect, useState } from "react";
import PropTypes from "prop-types";

export type InputProps = {

}


const Input = ({
    error,
    label,
    type,
    value,
    onChange,
}: any) => {
    let isTouched = false 
    return (
        <div
            style={{ borderRadius: "15px" }}
            className={`${isTouched ? "border-gray-400" : "border-gray-200"}
        ${error ? " border-red-600" : ""}
        flex flex-col border  py-3 px-4`}
        >
            <label
                className={`text-sm font-bold ${error ? "text-red-400" : "text-topset-100"
                    }`}
            >
                {label}
            </label>
            {
                type === "textarea" ?
                    <textarea
                        {...(type === "number" && { pattern: "[0-9]*" })} 
                        className={`focus:outline-none  text-topset-100 text-sm py-2 ${error ? "  " : ""
                            }`}
                        value={value}
                        onChange={onChange}
                        rows={2} cols={50}

                    /> :
                    <input
                        {...(type === "number" && { pattern: "[0-9]*" })}
                        type={type}
                        className={`focus:outline-none  text-topset-100 text-sm py-2 ${error ? "  " : ""
                            }`}
                        value={value}
                        onChange={onChange}

                    />
            }
        </div>
    );
};

export default Input;
