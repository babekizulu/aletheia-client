//libs
import { NavLink } from "react-router";
//icons
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

function AdVerification() {
    return (
        <div className='news-ad'>
            <div className='news-ad'>
                <div className='ad-title'>
                    <h1>
                        Verify Your Business Profile 🇿🇦
                    </h1>
                </div>
                <div className='ad-content'>
                    <p>
                        Build trust, unlock opportunities, and strengthen your reputation in the township economy ecosystem. Verified businesses gain greater visibility and community confidence.
                    </p>
                </div>
                <div className='platforms-list'>
                    <ul>
                        <li>
                            Start Your Verification Process:<NavLink to="/verification">
                                Business Verification Portal
                                <HiMiniArrowTopRightOnSquare />
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='ad-content'>
                    <p>
                        Upload your business details, confirm your trading information, and improve your credibility within the network.
                    </p>
                </div>
                <div className="ad-send-off">
                    Protect local trade. Verify businesses. Strengthen community trust. 🇿🇦
                </div>
            </div>
        </div>
    )
}

export default AdVerification;