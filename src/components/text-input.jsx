import React from 'react'
function TextInput({ onChange,value }) {
    return (
        <>
            <input className='form-control' type="text" onChange={onChange} value={value} />
        </>
    );


}
export default TextInput