import React, { useState } from "react";
import './Form.css';

const Form = (props) => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredTag, setEnteredTag] = useState('');

    const nameChangeHandler = (event) => {

        console.log(enteredName);
        setEnteredName(event.target.value);
    }

    const tagChangeHanlder = (event) => {
        setEnteredTag(event.target.value);
        console.log(enteredTag)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setEnteredName('');
        setEnteredTag('')
    }

    return (

        <form onSubmit={handleSubmit}>
            <div>
                <label>Search by name</label>
                <input type='text' value={enteredName} onChange={nameChangeHandler}></input>
            </div>
            <div>
                <label>Search by tag</label>
                <input type='text' value={enteredTag} onChange={tagChangeHanlder}></input>
            </div>
            <div>
                <button type='submit'> Filter </button>
            </div>
        </form>
    );
}


export default Form;