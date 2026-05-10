//libs
import {NavLink} from 'react-router';
//logo
import logo from './img/logo.svg';

function Logo() {
    return (
        <NavLink to='/' className='logo'>
            <img src={logo}/>
        </NavLink>
    )
}

export default Logo;