import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom'


export const CardInfo = ({name, population, region, capital, flags}) => {
  const navigate = useNavigate();
  // console.log(capital[0]);

  const onSelectCountry = () => {
   navigate(`/country/${name.common}`)
  }

  const populationString = useMemo(() => population.toLocaleString(), [population])
  
  return (
    <div onClick={ onSelectCountry } aria-label="card-info" className="card-info">
  
          <figure>
              <img src={flags.png} loading="lazy" alt={`${name.common}.png`} />
          </figure>

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
