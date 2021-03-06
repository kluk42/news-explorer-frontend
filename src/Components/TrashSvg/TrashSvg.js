export default function TrashSvg({isHovered, ...props}) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill={isHovered ? "black" : "#B6BCBF"}
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 3H9v2H3v2h18V5h-6V3zM5 9v11a2 2 0 002 2h10a2 2 0 002-2V9h-2v11H7V9H5zm4 0v9h2V9H9zm4 0v9h2V9h-2z"
            />
        </svg>
    );
}
