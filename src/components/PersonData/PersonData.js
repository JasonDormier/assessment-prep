import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';

import './PersonData.css';

const Poki = () => {

    const [pokiData, setPokiData] = useState([]);

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
        fetchData().then(apiPoki => {
            //console.log('apiPoki: ', apiPoki)
            setPokiData(poki => [...poki, ...apiPoki]);
        });
    }, []);

    return (

        <div>
            <Card className='holder'>
                <h1>Test Title</h1>
                <p>This is a test to see if I have this setup properly.</p>

                <ol>
                    {console.log('pokiData: ', pokiData)}
                    {pokiData.map((poki, pokiIndex) => {
                        return <li key={pokiIndex}>{poki.first_name} {poki.last_name}, {poki.address.street_address}</li>
                    }
                    )}
                </ol>
            </Card>
        </div>
    );
}

export default Poki;