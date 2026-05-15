//libs
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

function AdSafetyWarnings() {
    return (
        <div className="ad-safety-warnings">
            <div className='news-ad'>
                <div className='ad-title'>
                    <h1>
                        Business Safety & Compliance Alerts 🇿🇦
                    </h1>
                </div>
                <div className='ad-content'>
                    <p>
                        Protect your business, employees, and customers by following verified South African safety and compliance standards. Stay alert to fraud, unsafe trading conditions, and workplace risks.
                    </p>
                </div>
                <div className='platforms-list'>
                    <ul>
                        <li>
                            Workplace Health & Safety Guidelines: <a target="_blank" href="https://labourguide.co.za/health-and-safety/health-and-safety-downloads">
                                Department of Employment & Labour Safety Resources
                                <HiMiniArrowTopRightOnSquare />
                            </a>
                        </li>
                        <li>
                            Crime & Scam Prevention Updates: <a target="_blank" href="https://www.saps.gov.za/">
                                South African Police Service
                                <HiMiniArrowTopRightOnSquare />
                            </a>
                        </li>
                        <li>
                            Consumer Protection & Business Compliance: <a target="_blank" href="https://thencc.org.za/">
                                National Consumer Commission
                                <HiMiniArrowTopRightOnSquare />
                            </a>
                        </li>
                        <li>
                            Small Business Support & Risk Guidance:<a target="_blank" href="https://systemsnew.sefa.org.za/SMMEPortal">
                                SEDFA Online Portal
                                <HiMiniArrowTopRightOnSquare />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="ad-send-off">
                    Trade safely. Protect your reputation. Build stronger township businesses. 🇿🇦
                </div>
            </div>
        </div>
    )
}

export default AdSafetyWarnings;