import {Link} from 'react-router-dom';
function Footer(props){
    return (
      <>

      <div  className="col-12 bg-secondary bg-gradient">
   
    <div className="container text-light">
  <footer className="py-5">
    <hr />
    <div className="row">
      <div className="col-6 col-md">
        <h5>IMAGE</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-light">Visit</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-light">Exhibitions And Events</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-light">The Collection</Link></li>

        </ul>
      </div>

      <div className="col-6 col-md text-light">
        <h5>ADRESS</h5>
        <ul className="nav flex-column ">
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-light ">Michigan Avenue Entrance</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-light">111 South Michigan Avenue Chicago, IL 60603</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-light">Modern Wing Entrance</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-light">159 East Monroe Street Chicago, IL 60603</Link></li>
        </ul>
      </div>

      <div className="col-6 col-md">
        <h5>About us</h5>
        <ul className="nav flex-column text-light">
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-light">Identity</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-light">History</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-light">Leadership</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-light">Departments</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-light">About</Link></li>
        </ul>
        
        <hr />
        <h5>Support us</h5>
        <ul className="nav flex-column text-light">
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-light">Membership</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-light">Annual Fund</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-light">Planned Giving</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-light">Corporate Sponsorship</Link></li>
        </ul>

      </div>

      <div className="col-6 col-md">
        <h5>Learn with us</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-light">Families</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-light">Teens</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-light">Educators</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-light">Adults</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-light"></Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-light"></Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-light"></Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-light"></Link></li>
</ul>

        <hr />
       
        <h5>Follow us</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="https://www.facebook.com/artic" target="_blank" className="nav-link p-0 text-light">Facebook</Link></li>
          <li className="nav-item mb-2"><Link to="https://twitter.com/artinstitutechi" target="_blank" className="nav-link p-0 text-light">Twitter</Link></li>
          <li className="nav-item mb-2"><Link to="https://www.instagram.com/artinstitutechi/" target="_blank" className="nav-link p-0 text-light">Instagram</Link></li>
          <li className="nav-item mb-2"><Link to="https://www.youtube.com/user/ArtInstituteChicago" target="_blank" className="nav-link p-0 text-light">YouTube</Link></li>
</ul>
      </div>
    </div>
    <hr />

    <div className="container ">
      <h5 className='text-decoration-underline text-dark font-italic'>&copy;Art Institute of Chicago</h5>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><Link className="link-dark" to="#"><svg className="bi" width="24" height="24"><use /></svg></Link></li>
        <li className="ms-3"><Link className="link-dark" to="#"><svg className="bi" width="24" height="24"><use /></svg></Link></li>
        <li className="ms-3"><Link className="link-dark" to="#"><svg className="bi" width="24" height="24"><use /></svg></Link></li>
      </ul>
    </div>
  </footer>
</div>
</div>

</>
    )
    }
    export default Footer;