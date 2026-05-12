//libs
import { NavLink } from "react-router";
//icons
import { IoMdHelpCircleOutline } from "react-icons/io"
import { TiSpanner } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

function Navigation() {
    return (
        <nav className='navigation'>
            <ul>
                <li>
                    <NavLink to='/help'>
                        <IoMdHelpCircleOutline className='nav-icon'/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/preferences'>
                        <TiSpanner className='nav-icon'/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/settings'>
                       <IoSettingsOutline className='nav-icon'/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/profile'>
                        <CgProfile className='nav-icon'/>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;