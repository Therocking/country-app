import { useNavigate } from 'react-router-dom';
import { useCountriesSlice } from '../../hooks/useCountriesSlice'

export const BoderButtons = ({borders}) => {
  const navigate = useNavigate();

  const { startGetCountryBorder } = useCountriesSlice();
  
  const filterCountryBorder = async(countryBorder) => {
    const country = await startGetCountryBorder( countryBorder );
	  
    const countryName = country[0].name.common;

    navigate(`/country/${countryName}`);
  }

  return (
    <>
        <button onClick={() => filterCountryBorder(borders) }>
            {borders}
        </button>
    </>
  )
}
