import { useState, useEffect } from 'react'
import axios from 'axios'

function SWMovies() {
  const [number, setNumber] = useState(1)
  const [movie, setMovie] = useState('')

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`https://swapi.dev/api/films/${number}`)
      setMovie(res.data)
    }
    fetchData()
  }, [number])

  const handleChange = (e) => {
    setNumber(e.target.value)
  }

  return (
    <div>
      <h1>Pick a movie</h1>
      <h4>You chose: {movie.title}</h4>
      <p>{movie.opening_crawl}</p>
      <select id='' name='movies' value={number} onChange={handleChange}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
      </select>
    </div>
  )
}

export default SWMovies
