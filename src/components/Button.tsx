import React from 'react'
import {TailSpin} from "react-loader-spinner";

export type ButtonType = {
    children: string
    loading: boolean
    disabled: boolean
    handleClick?: ()=>{}
    type: "button"|"submit"
}
const Button: React.FC<ButtonType> = ({
    children,
    loading,
    disabled,
    handleClick,
    type
}) => {

    return (
        <button
            {...(type !== "submit" && { onClick: handleClick })}
            disabled={disabled || loading}
            type={type}
            className={`${disabled || loading
                    ? "cursor-not-allowed text-white opacity-70"
                    : "transition ease-linear duration-200 hover:text-white  text-white hover:bg-purple-900"
                } bg-topset-100 w-full
         flex justify-center py-3 mt-10 text-lg rounded-xl   focus:outline-none `}
        >
            {loading ? (
                <TailSpin 
                    color="#8291D4"
                    height={20}
                    width="100%"
                />
            ) : (
                children
            )}
        </button>
    )
}

export default Button