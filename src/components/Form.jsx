import React, { useState } from 'react'  
import { v4 as uuid } from 'uuid'  

function Form({ todos, setTodos }) { // Here we destructure props  
    const [input, setInput] = useState('');  

    const onChange = (e) => {  
        setInput(e.target.value)  
    }  

    const onSubmit = (e) => {  
        e.preventDefault();  
        // Use todos prop directly  
        setTodos([  
            ...todos,  
            { name: input, completes: false, id: uuid() }  
        ]);  
        // Clear input after submission  
        setInput('');  
    } 


    return (  
        <form onSubmit={onSubmit}>  
            <input  
                className='form-input'  
                type='text'  
                placeholder='Enter a todo'  
                autoComplete='off'  
                value={input}  
                onChange={onChange}  
            />  
            <button className='form-button' type='submit'>Add </button>   
        </form>  
    )  
}  

export default Form;