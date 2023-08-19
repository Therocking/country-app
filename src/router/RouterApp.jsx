import { Navigate, Route, Routes } from 'react-router-dom'
import { ContriesPage } from '../contries/pages/ContriesPage'
import { CountryDetails } from '../contries/pages/CountryDetails'



export const RouterApp = () => {
  
    return (
        <Routes>
            <Route path='/' element={<ContriesPage/>} />
            <Route path='/country/:name' element={<CountryDetails/>} />
            
            <Route path='/*' element={ <Navigate to='/'/> } />
        </Routes>
    )
}
