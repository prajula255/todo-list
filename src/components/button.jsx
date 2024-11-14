import React from "react";
function Button({ onClick, label }) {
    return (
        <>
            <button className='btn btn-primary px-4' onClick={onClick}>
                {label}
            </button>
        </>
    );
}
export default Button;