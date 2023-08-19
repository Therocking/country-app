import { CardContry, Header, SearchCoutry, SelectRegion } from '../components'

export const ContriesPage = () => {  

  return (
    <>
      <Header/>

      <section className='search-flex'>
        <SearchCoutry/>
        <SelectRegion/>
      </section>

      <CardContry/>
    </>
  )
}
