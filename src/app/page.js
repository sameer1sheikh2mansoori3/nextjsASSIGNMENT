import Image from "next/image";
import styles from "./page.module.css";
import Box from './components/Box';

//page.js

export default function Home() {
  return (
    <div>
      {/* navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid  d-flex justify-content-between">
         
          <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
         
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Contact-us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
      <div className="d-flex ">
        



<div className="d-flex justify-content-center align-items-center border w-100 vh-100">
  <div className="d-flex flex-column">
    <Box headings={'People'} paragraph={'loremsaaufha asjd;au sa;dh'}/>
    <Box headings={'People'} paragraph={'loremsaaufha asjd;au sa;dh'}/>
  </div>
  <div className="d-flex flex-column">
  <Box headings={'People'}  paragraph={'loremsaaufha asjd;au sa;dh'}/>
  <Box headings={'People'} paragraph={'loremsaaufha asjd;au sa;dh'}/>
  </div>
</div>


      </div>

     
    </div>
  );
}
