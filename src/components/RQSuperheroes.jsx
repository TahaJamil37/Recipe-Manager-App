import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

function RQSuperheroes() {

    const fetechedData = async () => {  
        return axios.get('http://localhost:4000/superheroes')}
    

  const {data,isLoading,isError,error,refetch}=  useQuery('superheroes', fetechedData,{
        
   // refetchOnWindowFocus:true,
    // refetchOnMount:true,
    // refetchInterval:2000,
    // refetchIntervalInBackground:2000,
    //enabled:false,//on click of button it will fetch data,
    // onSuccess:(data)=>{console.log(data)},//on success of data fetching
    // onError:(error)=>{console.log(error)//on error of data fetching


}



    )

    if(isError){ return <h2>{error.message}</h2>}  


  return (
    <div>{isLoading?<h2>data is loading</h2>:data?.data?.map((hero,index)=><p key={index}>{hero?.name}</p>)}
    
    {/* <button onClick={refetch}>refetch</button> */}
    </div>
   
  )
}

export default RQSuperheroes