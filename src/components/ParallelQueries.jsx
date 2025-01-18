import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

function ParallelQueries() {

    const fetechedData = async () => {  
        return axios.get('http://localhost:4000/superheroes')}


        const fetechedFriends = async () => {  
            return axios.get('http://localhost:4000/friends')}


    const {data:superheroes,isLoading:superheroesIsLoading,isError:superheroesIsError,error:superheroesError}=  useQuery('superheroes', fetechedData)
    const {data:friends,isLoading:friendsIsLoading,isError:friendsIsError,error:friendsError}=  useQuery('friends', fetechedFriends)
  return (
    <div>{superheroesIsLoading?<h2>data is loading</h2>:superheroes?.data?.map((hero,index)=><p key={index}>{hero?.name}</p>)}
    {friendsIsLoading?<h2>data is loading</h2>:friends?.data?.map((friend,index)=><p key={index}>{friend?.name}</p>)}

    </div>
  )
}

export default ParallelQueries