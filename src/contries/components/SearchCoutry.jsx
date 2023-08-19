import { useCountriesSlice } from '../../hooks/useCountriesSlice';
import { Search } from '../icons/Search'

export const SearchCoutry = () => {

  const {  startFilterCountries } = useCountriesSlice();

  const onFilterCountry = (e) => {
    const countryName = e.target.value.toLowerCase(); 

    startFilterCountries(countryName);
  }


  return (
    <div className="container-input">
        <div className="container-icon-search">
            <Search/>
        </div>
        
        <input 
          onChange={ onFilterCountry }
          type="text" 
          className="input" 
          placeholder="Search for a country..."
        />
    </div>
  )
}
