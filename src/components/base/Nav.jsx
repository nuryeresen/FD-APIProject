import routes from "../../routes";
import { Link } from "react-router-dom";



function Nav(props) {

    {/* <div className="container">
      <div className="nav navbar navbar-expand-lg navbar-dark bg-dark ">
        <ul>
          {
            routes.filter(
              item => item.isNav
            ).map(
              (item, index) =>
                <li key ={index}><Link to={item.path}><h3 className="text-light">{item.title}</h3></Link></li>
            )
          }
        </ul>
        <hr />
      </div>
    </div> */}
    return (
    <ul className="nav justify-content-center bg-dark">

   {  routes.filter(
              item => item.isNav
            ).map(
              (item, index) =>
               <li key ={index} className="nav-item nav-Link d-flex flex-row p-4"> <Link  to={item.path}><h3 className="text-light">{item.title}</h3></Link> </li>)}
 
 
</ul>
  )
}

export default Nav;