import { useEffect, useMemo } from 'react';
import { chageTitle, /* changeIcon */ } from '../../helpers';
import { BoderButtons } from './BorderButtons';

export const CountryDetailInfo = ({country}) => {

    const {
        name, 
        flag, 
        population, 
        region, 
        subregion,
        independent,
        capital,
        car, 
        borders
    } = country;

    useEffect(() => {
        chageTitle(name.common);
    }, [])

    const notHave = useMemo(() => <span>Not Have</span>, []);

    const populationString = useMemo(() => population.toLocaleString(), [])

    
    return (
        <div className="flex-details">
            <p>
              {flag}
            </p>

            <article className="details">
                <h2>{name.common}</h2>

                <div className="flex-article">
                    <p>native name:      <span>{name.official}</span> </p>
                    <p>population:       <span>{populationString}</span> </p>
                    <p>region:           <span>{region}</span> </p>
                    <p>sub region:       <span>{subregion}</span> </p>
                    <p>independent:       <span>{JSON.stringify(independent)}</span> </p>
                    <p>capital:          {
                                            capital.map( cap => <span key={cap}> {cap} </span> )
                                         } </p>
                    
                </div>

                    <p>border contries:</p>
                <div className="borderContries">
                    {
                        (borders === undefined)
                        ? notHave
                        : borders.map( border => (
                            <BoderButtons 
                                key={border}
                                borders={border}
                            />
                        ) )
                    }
                </div>
            </article>
        </div>
  )
}
