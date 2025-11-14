import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom'


export const CardInfo = ({name, population, region, capital, flag}) => {
  const navigate = useNavigate();

  const onSelectCountry = () => {
   navigate(`/country/${name.common}`)
  }

  const populationString = useMemo(() => population.toLocaleString(), [population])
  
  return (
    <div onClick={ onSelectCountry } aria-label="card-info" className="card-info">
  
          <p>
            {flag}
          </p>

          <article className="info-contry">
              <h4>{name.common}</h4>

              <p>populaton: <span>{populationString}</span> </p>
              <p>region: <span>{region}</span> </p>
              <p>capital:          {
                                      capital?.map( cap => <span key={cap}> { cap } </span> )
                                   } </p>
          </article>
    </div>
  )
}
