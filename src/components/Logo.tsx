//libs
import {NavLink} from 'react-router';
//logo
import logo from './img/logo.svg';

function Logo() {
    return (
        <NavLink to='/' className='logo'>
            <img src={logo}/>
            <h1>thoth*</h1>
        </NavLink>
    )
}

export default Logo;