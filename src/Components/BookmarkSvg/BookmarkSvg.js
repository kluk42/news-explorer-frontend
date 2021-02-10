import React from "react";

function BookmarkSvg({ className, isOutlineBlack, isFillingBlue, ...props }) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill={isFillingBlue ? 'blue' : 'none'}
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                d="M11.382 15.714L6 19.942V4h12v15.942l-5.382-4.228-.618-.486-.618.486z"
                stroke={isOutlineBlack ? "black" : isFillingBlue ? 'blue' : "#B6BCBF"}
                strokeWidth={2}
            />
        </svg>
    );
}

export default BookmarkSvg;
