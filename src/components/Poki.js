import React, { useState, useEffect } from 'react';

const Poki = () => {

    const [pokiData, setPokiData] = useState([]);

    async function fetchData() {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
            const data = await response.json();
            //console.log(data.results);
            return data.results;
        } catch (err) {
            console.error(err)
        };
    }

    useEffect(() => {
        fetchData().then(apiPoki => {
            setPokiData(apiPoki);
        });
    }, []);

    return (

        <div>
            <h1>Test Title</h1>
            <p>This is a test to see if I have this setup properly.</p>
            <ol>
                {pokiData.map((poki, pokiIndex) => {
                    return <li key={pokiIndex}>{poki.name}, {poki.url}</li>
                }
                )}
            </ol>
        </div>


    );
}

export default Poki;