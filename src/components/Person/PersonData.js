import React, { useState, useEffect } from 'react';
//import Form from '../PersonForm/PersonForm';
import Card from '../Card/Card';
import Person from './Person';

import classes from './PersonData.module.css';

function testScoresFunction() {

    //write a function that generates 10 test scores and outputs the test scores in an array and also the average of all the scores.
    //todo - the scores array needs generate test scores for each person that the api pulls. So there should be 20 people. Or you could make a varible that can feed into the api and tells the score generator so they both match.
    const scoresArray = [];
    let sum = 0;

    for (let i = 0; i < 10; i++) {
        let score = randomScoreGenerator();
        console.log(`score ${i}: ${score}`);
        scoresArray.push(score);
        sum += score;
    }
    scoresArray.push(sum / 10);
    return scoresArray;
}

const randomScoreGenerator = () => {
    return Math.floor(Math.random() * 100);
}

const calculateAge = (birthdateStr) => {

    let age = 0;
    const todaysDate = [],
        date = new Date();
    todaysDate.push(date.getUTCFullYear());
    todaysDate.push(date.getMonth() + 1);
    todaysDate.push(date.getUTCDate());

    const birthday = birthdateStr.split('-').map(element => {
        return parseInt(element);
    })

    age = todaysDate[0] - birthday[0];
    const month = todaysDate[1] - birthday[1];
    const day = todaysDate[2] - birthday[2];

    return month < 0 || day < 0 ? age - 1 : age;
}

async function fetchData() {
    try {
        const response = await fetch('https://random-data-api.com/api/users/random_user?size=20');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err)
    };
}

const PersonData = () => {

    //you need to pass the data into the api data and it needs to generate a new test score for each person that is generated with the api call.

    const [personData, setPersonData] = useState([]);
    const [testScores, setTestScores] = useState([]);

    // const passData = () =>{
    //     return {
    //         'key' :personIndex,
    //         'firstName' : first_name,
    //         'lastName' : last_name,
    //         'email' : email,
    //         'age' calculateAge(date_of_birth),
    //         'job_title' : employment.title,
    //         'skill' : employment.key_skill,
    //         'averageScore' : testScores[10],
    //     }
    // }

    useEffect(() => {
        fetchData().then(apiPerson => {
            setPersonData(person => [...person, ...apiPerson]);
        });
        let testScores = testScoresFunction();
        setTestScores(testScore => [...testScore, ...testScores]);
    }, []);

    // useEffect(() => {

    // }, []);

    //let personTestScores = testScoresFunction();

    return (
        <Card className= {classes.holder}>
            {personData.map((person, personIndex) => {
                return <Person
                    key={personIndex}
                    firstName={person.first_name}
                    lastName={person.last_name}
                    email={person.email}
                    age={calculateAge(person.date_of_birth)}
                    job_title={person.employment.title}
                    skill={person.employment.key_skill}
                    averageScore={testScores[10]}
                //the average scores need to be pass down this could still be scores = testscores?

                />
            })}
        </Card>
    );
}

export default PersonData;