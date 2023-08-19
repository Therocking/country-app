import { useEffect } from 'react';
import { REGIONS } from '../../constants/regions'
import { useCountriesSlice } from '../../hooks/useCountriesSlice';

export const SelectRegion = () => {

  const { startFilterCountriesByRegion } = useCountriesSlice();
  
  const { AFRICA, AMERICA, ASIA, EUROPE, OCEANIA } = REGIONS;
  
  const onGetCountryByRegion = (e) => {
    const region = e.target.value;
	
	  localStorage.setItem("region", region);
    startFilterCountriesByRegion( region )
  }

 useEffect(() => {
    const regionsSelect = document.getElementById("regions");
    const valorLocalStorage = localStorage.getItem('region');
    
    if (valorLocalStorage) {
      regionsSelect.value = valorLocalStorage;
    }
  }, []);

  return (
    <div className='content-selector'>
        <select onChange={ onGetCountryByRegion } name="regions" id="regions">
          <option disabled value="default">Filter by Region</option>
          <option value={AFRICA}>{AFRICA}</option>
          <option value={AMERICA}>{AMERICA}</option>
          <option value={ASIA}>{ASIA}</option>
          <option value={EUROPE}>{EUROPE}</option>
          <option value={OCEANIA}>{OCEANIA}</option>
        </select>
    </div>
  )
}
