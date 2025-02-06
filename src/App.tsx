import './App.css'
import CardsWrapper from './components/CardsWrapper/CardsWrapper'
import SearchInput from './components/SearchInput/SearchInput'

function App() {

  return (
    <>
      <SearchInput onSearch={function (searchTerm: string): void {
        throw new Error('Function not implemented.')
      } } />
      <CardsWrapper />
    </>
  )
}

export default App
