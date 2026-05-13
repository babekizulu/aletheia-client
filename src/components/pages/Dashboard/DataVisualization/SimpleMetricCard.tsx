//libs
import type { DataCard as DataCardProps } from "../../../../types/dashboard";
//icons
import { FaCaretUp } from "react-icons/fa";

function SimpleMetricCard({quantity, increaseRate, title}: DataCardProps) {
    return (
        <div className='simple-metric-card'>
            <div className='metric-title'>
                {title}
            </div>
            <div className='metric-quantity'>
                {quantity}
            </div>
            <div className='metric-increase-rate'>
                <FaCaretUp className='metric-icon'/>{increaseRate}%
            </div>
        </div>
    )
}

export default SimpleMetricCard;