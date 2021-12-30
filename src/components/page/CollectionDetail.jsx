import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';


function CollectionDetail(props){
const params = useParams()

console.log(params.id)
const [data, setData]= useState({})


useEffect(() => {
    
    const URL= `https://api.artic.edu/api/v1/artworks/${params.id}`;
    console.log(URL)
    fetch(URL)
    .then(response => response.json())
    .then(json => {setData(json.data)}
    
    )
}, [])

    return(
     <>
    <h1> Collection Details</h1>
    <p>
     {/*    {JSON.stringify(data)} */}
       {/* {
       data.map(item => <li key={item.id}>
        {item.id}-{item.title}
        </li>)
       } */}
    </p>
<p><h3 className="text-warning">Id: {data.id}</h3></p>
<p><h3 className="text-success">Title: {data.title}</h3></p>
<p><h3 className="text-primary">Artist: {data.artist_display}</h3></p>


    
</>)
}

export default CollectionDetail;
