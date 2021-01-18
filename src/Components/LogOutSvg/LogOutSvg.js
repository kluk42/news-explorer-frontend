import React from "react";

function LogOutSvg({ isBlack, ...props }) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 6H6v12h4v2H6a2 2 0 01-2-2V6a2 2 0 012-2h4v2zm7.586 7l-4.293 4.134 1.414 1.362 6.707-6.459-6.707-6.459-1.414 1.362 4.293 4.134H8V13h9.586z"
                fill={` ${isBlack ? 'black' : 'white'}`}
            />
        </svg>
    );
}

export default LogOutSvg;
