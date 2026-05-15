//libs
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

function AdSuspiciousActivityFlags() {
    return (
        <div className="ad-suspicious-activity-flags">
            <div className='news-ad'>
                <div className='ad-title'>
                    <h1>
                        Report Suspicious Business Activity 🇿🇦
                    </h1>
                </div>
                <div className='ad-content'>
                    <p>
                        Help protect township economies by reporting fraud, corruption, counterfeit goods, unsafe trading, and suspicious financial activity. Strong communities grow through trusted business practices.
                    </p>
                </div>
                <div className='platforms-list'>
                    <ul>
                        <li>
                            Report Commercial Crime: <a target="_blank" href="https://www.npa.gov.za/specialised-commercial-crime-unit">
                                National Prosecuting Authority of South Africa Commercial Crime Unit
                                <HiMiniArrowTopRightOnSquare />
                            </a>
                        </li>
                        <li>
                            Report Corruption & Fraud: <a target="_blank" href="https://www.dpsa.gov.za/contact-us/">
                                Public Service Commission Anti-Corruption Hotline
                                <HiMiniArrowTopRightOnSquare />
                            </a>
                        </li>
                        <li>
                            Financial Crime & Money Laundering Reporting: <a target="_blank" href="https://www.fic.gov.za/">
                                Financial Intelligence Centre South Africa
                                <HiMiniArrowTopRightOnSquare />
                            </a>
                        </li>
                        <li>
                            Consumer Complaints & Illegal Trading Reports: <a target="_blank" href="https://thencc.org.za/">
                                National Consumer Commission
                                <HiMiniArrowTopRightOnSquare />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="ad-send-off">
                    Protect local trade. Verify businesses. Strengthen community trust. 🇿🇦
                </div>
            </div>
        </div>
    )
}

export default AdSuspiciousActivityFlags;