//icons
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

function AdExpiredPermits() {
    return (
        <div className='news-ad'>
            <div className='news-ad'>
                <div className='ad-title'>
                    <h1>
                        Labour & Business Permit Renewals 🇿🇦
                    </h1>
                </div>
                <div className='ad-content'>
                    <p>
                        Keep your business active and compliant with South African labour and employment regulations. Renew work-related permits, business registrations, and labour documentation through official government platforms.
                    </p>
                </div>
                <div className='platforms-list'>
                    <ul>
                        <li>
                            Employment & Labour Services: <a target="_blank" href="https://www.labour.gov.za/">
                                Department of Employment & Labour
                                <HiMiniArrowTopRightOnSquare />
                            </a>
                        </li>
                        <li>
                            UIF & Employer Services: <a target="_blank" href="https://ufiling.labour.gov.za/">
                                uFiling South Africa
                                <HiMiniArrowTopRightOnSquare />
                            </a>
                        </li>
                        <li>
                            Business Registration & Compliance: <a target="_blank" href="https://www.cipc.co.za/">
                                CIPC South Africa
                                <HiMiniArrowTopRightOnSquare />
                            </a>
                        </li>
                        <li>
                            COIDA / Compensation Fund Services: <a target="_blank" href="https://cfonline.labour.gov.za">
                                Compensation Fund
                                <HiMiniArrowTopRightOnSquare />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="ad-send-off">
                    Stay verified. Stay operational. Build with confidence. 🇿🇦
                </div>
            </div>
        </div>
    )
}

export default AdExpiredPermits;