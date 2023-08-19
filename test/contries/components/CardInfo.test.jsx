import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";

import { CardInfo } from "../../../src/contries/components/CardInfo"
import { countriesSlice } from "../../../src/store/countries/countriesSlice";


const store = configureStore({
  reducer: {
      auth: countriesSlice.reducer
  },
});


describe('pruebas en <CardInfo/>', () => {

  const props = {
    name: 'alemania' , 
    population: 456454,
    region: 'europe', 
    capital: 'berlin', 
    flags: {
      png: 'htttp://unabandera.com'
    }
  }

  test('debe de mostrar el componente', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>

          <CardInfo name={props.name} population={props.population} region={props.region} capital={props.capital} flags={props.flags} />
        </MemoryRouter>
      </Provider>
    );
    
    screen.debug();


    expect( props.name ).toBeTruthy()
  })

  test('debe hacer match con el snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>

          <CardInfo name={props.name} population={props.population} region={props.region} capital={props.capital} flags={props.flags} />
        </MemoryRouter>
      </Provider>
    );

    expect(container.innerHTML).toMatchSnapshot()

 })
  
})
