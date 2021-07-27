import React from "react";

//each one of the li items should be dynamically populated from PeopleData api
// you may need to make a random number generator for the random test scores and then average them out, store them in a array inside the person object you will need to make for each person.
//You may also need to create an array of skills.
const Person = (props) => {
    return (

        <div>
            <h2>{props.firstName} {props.lastName}</h2>
            <ol>
                <li>Email: {props.email}</li>
                <li>Age: {props.age}</li>
                <li>Job Title: {props.job_title}</li>
                <li>Skill: {props.skill}</li>
                <li>Average: {props.averageScore}</li>
                <ol>
                    {/* this needs to be a component? that handles the the printing of each test score?*/}
                </ol>
            </ol>
        </div>

    );
}

export default Person;