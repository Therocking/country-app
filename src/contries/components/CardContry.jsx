import { useEffect } from 'react';
import { useCountriesSlice } from '../../hooks/useCountriesSlice'
import { CardInfo } from './CardInfo'

export const CardContry = () => {
  const {  startGetCountries, startFilterCountriesByRegion, countries, isLoading } = useCountriesSlice();


  /* Revisa el localstorage para llamar la funcion */
  useEffect(() => {
	  const region = localStorage.getItem("region");
	if( region ) {
		startFilterCountriesByRegion(region);
	}else {
    		startGetCountries();   
	}
  }, [])

  return (
    <section className="card">
      {
        (isLoading) 
        ? <h2>loading..</h2>
        : countries.map( country => (
            <CardInfo
              key={country.name.common}
              {...country}
            />
          ))
      }
    </section>
  )
}
