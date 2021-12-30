import {useState, useEffect} from "react";
import { Link } from "react-router-dom";



function Collection(props){
    
    const [data, setData] =useState([])
 
  useEffect(() => {
          setTimeout(()=> {
          const URL='https://api.artic.edu/api/v1/artworks';

    fetch(URL)
    .then(response => response.json())
    .then(json => {setData(json.data)

})},1000)
      
  }, [])

if (data.length === 0){return <h1>Yükleniyor..</h1>}
  
    return <>
    <h1> Collection</h1>
    <ul>
        {
            data.map(item => <li key={item.id}>
                <Link to={`${item.id}`}>{item.title}</Link>
                </li>)
        }
    </ul>
    </>

}

export default Collection;