import React from 'react'
import {useState, useEffect} from 'react'
import './App.css'
import SearchIcon from './search.svg'
import Movie from './Movie'

URL=' http://www.omdbapi.com?apikey=39928637'


const App = () => {
    const [movies,setMovies]=useState([])
    const [searchTerm,setSearchTerm]=useState('')

    const searchMovies = async(title) =>{ 
        const response= await fetch(`${URL}&s=${title}`)
        const data = await response.json()
        setMovies(data.Search)
    }

    useEffect(() => {
        searchMovies('Spiderman')
    },[])


    return (
        <div className='App'>
            <h1>Movie Site</h1>
            
            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e)=>{setSearchTerm(e.target.value)}}
                />
                <img
                  src={SearchIcon}
                  alt='search'
                  onClick={() => searchMovies(searchTerm)}
                  />
            </div>
            {
                movies?.length > 0 
                ? (
                    <div className='container'>
                        {movies.map((movie)=>(
                            <Movie movie={movie} />
                        )) }
                        
                     </div>

                ):(
                    <div className='empty'>
                        <h2>No Movies found</h2>
                    </div>
                )

            }
            
        </div>
    )
}

export default App