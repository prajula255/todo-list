import React from 'react'
function TextInput({ onChange }) {
    return (
        <>
            <input className='form-control' type="text" onChange={onChange} />
        </>
    );


}
export default TextInput