import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Header from '../components/Header'
import PokemonList from '../components/PokemonList'
import Pagination from '../components/Pagination'

function Home () {

    const [listPokemon, setListPokemon] = useState([]);
    const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon');
    const [nextPage, setNextPage] = useState('');
    const [previousPage, setPreviousPage] = useState('');
    const [loading, setLoading] = useState(true);

    function NextPage () {
        setCurrentPage(nextPage)
    }

    function PreviousPage () {
        setCurrentPage(previousPage)
    }

    useEffect(() => {
        setLoading(true)
        let cancel
         axios.get(currentPage, {
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(response => {
            setLoading(false)
            setNextPage(response.data.next)
            setPreviousPage(response.data.previous)
            setListPokemon(response.data.results.map(p => p.name))
            // setListPokemon(response.data.results)
        })
        .catch(function (error) {
            console.log('error');
          })
        
        return () => cancel()

    }, [currentPage])

    if (loading) return "Loading..."

    return (
        <>
        <Header/>
        <div className="pokemon-list">
            {/* {listPokemon.map((item, index) => {
                return <div key={index} >{item.name}</div>
            })} */}
            <PokemonList props={listPokemon}/>
            <Pagination 
                NextPage={ nextPage ? NextPage : null }
                PreviousPage={ previousPage ? PreviousPage : null }
            />
        </div>
        </>
    )
}

export default Home
