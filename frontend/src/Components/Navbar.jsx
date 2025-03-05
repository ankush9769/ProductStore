import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSquarePlus, faSun } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/addproduct'); // Redirect to the new page
    };
    const homepagebutton = () => {
        navigate('/'); // Redirect to the new page
    };

    return (
        <div>
            <nav className="navbar ">
                <div className='container-fluid' >
                    <div >
                        <button className='logo-btn bg-transparent' onClick={homepagebutton}><a className="navbar-brand fw-bold" style={{ fontSize: "2rem" }}>Product Store<FontAwesomeIcon icon={faCartShopping} style={{ color: "#457fe3", }} /></a></button>
                    </div>
                    <form className="d-flex gap-3" role="search">
                        <button className="btn btn-outline-dark" type="submit" onClick={handleButtonClick}><FontAwesomeIcon icon={faSquarePlus} /></button>
                        <button className="btn btn-outline-dark" type="submit"><FontAwesomeIcon icon={faSun} /></button>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;