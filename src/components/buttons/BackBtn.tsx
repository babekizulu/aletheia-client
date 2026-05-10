//libs
import { NavLink } from "react-router";
import type { Props } from "../../types/common";
//icons
import {MdArrowBack} from 'react-icons/md';

function BackBtn({prevDir}: Props) {
    return (
        <NavLink to={prevDir} className='back-btn'>
            <MdArrowBack />
        </NavLink>
    )
}

export default BackBtn;