import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Person from '../Person/Person';

import './PersonData.css';

const PersonData = () => {

    const [personData, setPersonData] = useState([]);

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

    useEffect(() => {
        fetchData().then(apiPerson => {
            setPersonData(person => [...person, ...apiPerson]);
        });
    }, []);

    return (

        <div>
            <Card className='holder'>

                    
            {personData.map((person, personIndex) =>{
               return <Person
                key = {personIndex}
                firstName = {person.firstName}
                lastName = {person.lastName}
                email = {person.email}
                // skill
                //averageScore
                />

                })}
                {/* <h1>Test Title</h1>
                <p>This is a test to see if I have this setup properly.</p>

                <ol>
                    {console.log('personData: ', personData)}
                    {personData.map((person, personIndex) => {
                        return <li key={personIndex}>{person.first_name} {person.last_name}, {person.address.street_address} {person.email}</li>
                    }
                    )}
                </ol> */}
            </Card>
        </div>
    );
}

export default PersonData;