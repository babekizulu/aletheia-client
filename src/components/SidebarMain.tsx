//libs
import { NavLink } from "react-router";
//icons
import { MdDashboard } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";
import { BsGraphUp } from "react-icons/bs";
import { IoStatsChartSharp } from "react-icons/io5";
import { TbArrowsJoin } from "react-icons/tb";
import { IoMdCart } from "react-icons/io";
import { TbArrowsExchange } from "react-icons/tb";
import { GrCompliance } from "react-icons/gr";
import { IoStarSharp } from "react-icons/io5";
import { AiFillSafetyCertificate } from "react-icons/ai";

function SidebarMain() {
    return (
        <aside className="sidebar-main">
            <nav>
                <ul>
                    <li>
                        <NavLink to='/dashboard' className='sidebar-item'>
                            <MdDashboard className='sidebar-icon'/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/education' className='sidebar-item'>
                            <RiGraduationCapFill className='sidebar-icon'/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/finance' className='sidebar-item'>
                            <BsGraphUp className='sidebar-icon'/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/logistics' className='sidebar-item'>
                            <IoStatsChartSharp className='sidebar-icon'/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/supply-chain' className='sidebar-item'>
                            <TbArrowsJoin className='sidebar-icon'/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/marketplace' className='sidebar-item'>
                            <IoMdCart className='sidebar-icon'/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/township-exchange' className='sidebar-item'>
                            <TbArrowsExchange className='sidebar-icon'/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/compliance' className='sidebar-item'>
                            <GrCompliance className='sidebar-icon'/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/reputation' className='sidebar-item'>
                            <IoStarSharp className='sidebar-icon'/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/safety' className='sidebar-item'>
                            <AiFillSafetyCertificate className='sidebar-icon'/>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default SidebarMain;