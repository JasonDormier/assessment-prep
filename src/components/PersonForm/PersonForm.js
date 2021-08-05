import React, { useState } from "react";
import Card from "../Card/Card";
import classes from './PersonForm.module.css';

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
        <Card className={classes.input}>
            <form onSubmit={handleSubmit}>
                <label>Search by name</label>
                <input type='text' value={enteredName} onChange={nameChangeHandler}></input>
                <label>Search by tag</label>
                <input type='text' value={enteredTag} onChange={tagChangeHanlder}></input>
                <button type='submit'> Filter </button>
            </form>
        </Card>
    );
}

export default Form;