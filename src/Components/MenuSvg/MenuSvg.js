function MenuSvg({isFillingBlack, ...props}) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path fill={`${isFillingBlack ? "#000000" : "#fff"}`} d="M4 8h16v2H4zM4 14h16v2H4z" />
        </svg>
    );
}

export default MenuSvg;
