 import {useState, useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";

function SearchCollection(props){

    const location= useLocation();
    const navigate= useNavigate();



    const urlParams = new URLSearchParams(location.search)
    const [urlQ, setUrlQ] = useState(urlParams.get('q'))

function formHandler(event) {
    event.preventDefault();
    setUrlQ(event.target.qInput.value)
    
    navigate(`/arama?q=${event.target.qInput.value}`)
}
const [data, setData]= useState([])
useEffect(() => {
  
  setTimeout(()=> {
  const URL=`https://api.artic.edu/api/v1/artworks/search?q=${location.search.split('=')[1]}`;

fetch(URL)
.then(response => response.json())
.then(json => {setData(json.data)

})},1000)},[location])


const results= <h3>Search Results: {urlQ}</h3>
    return <>
   
    <form onSubmit={formHandler}>
    <div className="mb-3">
      <label htmlFor="search" className="form-label"><h3>Search Input:</h3></label>
      <input name="qInput" type="text" className="form-control" id="search" defaultValue={urlQ} />
      <div id="emailHelp" className="form-text"></div>
    </div>
 
    <button type="submit" className="btn btn-danger">Search</button>
  </form>

{
    location.pathname==="/arama" && results
}


<div className="card text-center">
  <div className="card-header">
  <h5>Collection Results:</h5>
  </div>


  <div className="card-body">
   
    <p className="card-text bg-light text-danger">
      {
       data?.map(item => <li key={item.id}>
        {item.id}-{item.title}
        </li>)
       } 
    </p>
  
  </div>
  <div className="card-footer text-muted">
    <h5>Art Institute of Chicago</h5>
  </div>
</div>
<hr />

      

</>
}

export default SearchCollection;