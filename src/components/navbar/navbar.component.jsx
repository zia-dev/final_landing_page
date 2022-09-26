import './navbar.styles.css'
import Button from '../button/button.component';
import {ReactComponent as hamburger} from '../../assets/hamburger.svg'
import { useState } from 'react';

const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    
    const expandNav =  () => {
        setIsNavExpanded(!isNavExpanded);
      };

    return (

        <div className="nav-container">
            <span className='blue-transition'></span>
                    <button onClick={expandNav}
                    className="hamburger">
                       {<svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="white"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>}

                    </button>
            <nav className={`${(isNavExpanded == true)  ? 'navigation-menu expanded' : 'navigation-menu' } `}>
                <div className="navbar-container width-80">
                    <div className="logo-container">
                        ar shakir
                    </div>
                    <div className='navlinks-nav'>
                        <ul className='navlinks-container'>
                            <li className="nav-link">home</li>
                            <li className="nav-link">template</li>
                            <li className="nav-link">Blog</li>
                            <li className="nav-link">Pricing</li>
                        </ul>
                    </div>
                   
                    <div className="btn-container">
                        <p>Sign In</p>
                        <Button buttonType={'orangeBtn'} >Start Free</Button>
                    </div>
                </div>
            </nav>
        </div>

    );


}

export default Navbar;