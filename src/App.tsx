import { useState } from 'react';
import './App.css'
import CardsList from './components/CardsList/CardsList'
import SearchInput from './components/SearchInput/SearchInput'
import { ApiResponse, Character } from './types/types';
import { Typography } from '@mui/material';

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [error, setError] = useState<string>('');

  const handleSearch = async (searchTerm: string, signal?: AbortSignal) => {
    if (searchTerm.length < 3) {
      setCharacters([]);
      setError('');
      return;
    }

    try {
        const response = await fetch(
            `https://rickandmortyapi.com/api/character/?name=${searchTerm}`,
            { signal }
        );

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data: ApiResponse = await response.json();
        setCharacters(data.results);
        setError('');
    } catch (error) {
        setError('Characters not found');
        setCharacters([]);
    }
  };


  return (
    <>
      <SearchInput onSearch={handleSearch} />
      {error && (
        <Typography variant="body1" color="error" sx={{ marginTop: 2 }}>
          {error}
        </Typography>
      )}
      <CardsList characters={characters} />
    </>
  )
}

export default App
