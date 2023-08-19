import { useDispatch, useSelector } from 'react-redux'
import {  endLoading, getCountries, getCountrySelected, getCoutryByRegion, getCoutrySearched, getError } from '../store';
import { getCountriesFetch } from '../helpers';


export const useCountriesSlice = () => {
    const { countries, isLoading, countrySelected } = useSelector(state => state.countries);

    const dispatch = useDispatch();
    
    /* Se llama cuando se muestra la pagina */
    const startGetCountries = async() => {
        try {
            
            const data = await getCountriesFetch();

            dispatch( getCountries(data) );
        } catch (error) {
            dispatch( getError(error) );
        }
    }
    
    /* Se llama cuando se selecciona una region */
    const startFilterCountriesByRegion = async(regionName) => {
        
        try {
            
            const data = await getCountriesFetch();
            
            const filterCountriesByRegion = data.filter( country => 
                country.region.toLowerCase().includes( regionName ) );
                
                dispatch( getCoutryByRegion( filterCountriesByRegion ) );
                dispatch( endLoading() )
            } catch (error) {
                dispatch( getError( error ) )
        }
    }
    
    /* Se llama cuando se clickea un pais */    
    const startGetCountrySelected = async(countryName) => {
        try {
            const data = await getCountriesFetch();
            
            const filterCountrySelected = data.filter( country => 
                country.name.common === countryName );

                dispatch( getCountrySelected(filterCountrySelected) );
                dispatch( endLoading() )
        } catch (error) {
            dispatch( getError( error ) )
        }
    }
    
    /* Se llama cuando se clickea el pais frontera */
    const startGetCountryBorder = async( countryBorder ) => {
        try {
            const data = await getCountriesFetch();
            
            const country = data.filter( country => country.cca3 === countryBorder );

	    return country
        } catch (error) {
            dispatch( getError( error ) )
        }
    }
    
    /* Se llama cuando se utiliza el input */
    const startFilterCountries = async(countryName) => {
        try {
            
            const data = await getCountriesFetch();
            
            const arrCountry = data.filter( country => country.name.common.toLowerCase().includes( countryName ) );
            dispatch( getCoutrySearched( arrCountry ) );
            dispatch( endLoading() );
        } catch (error) {
            dispatch( getError( error ) )
        }
    }
    
    return {
        startGetCountries,
        countries,
        isLoading,
        countrySelected,
        startFilterCountriesByRegion,
        startGetCountrySelected,
        startGetCountryBorder,
        startFilterCountries
    }
  
}
