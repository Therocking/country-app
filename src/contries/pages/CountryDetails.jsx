import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { Header,CountryDetailInfo } from '../components'
import { Back } from '../icons/Back'
import { useCountriesSlice } from '../../hooks/useCountriesSlice';

export const CountryDetails = () => {
    const navigate = useNavigate()
    
    const {name} = useParams();
    
    const { startGetCountrySelected, countrySelected, isLoading } = useCountriesSlice();
    useEffect(() => {
        
        startGetCountrySelected(name)
    }, [name])
    

  return (
    <>
        <Header/>

        <section className="container-details">
            <div className="container-btn">
                <button onClick={ () => {navigate(-1)} }>
                    <Back/>
                    <span>Back</span> 
                </button>
            </div>

            {
                (isLoading)
                ? <h1>Loading...</h1>
                : countrySelected.map( country => (
                    <CountryDetailInfo
                        key={country.name.common}
                        country = {country}
                    />
                ) )
            }

        </section>
    </>
  )
}
