import React from "react";

//each one of the li items should be dynamically populated from PeopleData api
// you may need to make a random number generator for the random test scores and then average them out, store them in a array inside the person object you will need to make for each person.
//You may also need to create an array of skills.
const Person = (props) => {
    return (

        <div>
            <h2>{props.firstName}{props.lastName}</h2>
            <ol>
                <li>Company: {props.company}</li>
                <li>Email: {props.email}</li>
                <li>Skill: {props.skill}</li>
                <li>Average: {props.averageScore}</li>
                <ol>
                    <li>{props.Scores}</li>
                </ol>
            </ol>
        </div>

    );
}

export default Person;