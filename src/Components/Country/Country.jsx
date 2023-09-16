

import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    // console.log(country);
    const {name, flags,population, area, cca3} = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }



    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color: visited ? 'purple' : 'black'}}>Name : {name?.common}</h3>
            <img className='img-width' src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            {/* {when need to returns parameter} */}
            <button onClick={() => handleVisitedCountries(country)} style={{marginBottom: '5px'}}>Mark as visited</button><br />
            <button onClick={() => {handleVisitedFlags(country.flags.png)}} style={{marginBottom: '5px'}}>Add Flag</button><br />
            {/* when no need to returns parameter */}
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited && <p> I have visited this country.</p>}
        </div>
    );
};

export default Country;