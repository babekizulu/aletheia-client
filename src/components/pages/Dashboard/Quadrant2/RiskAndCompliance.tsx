//libs
import {useState, useEffect} from 'react';
//components
import AdExpiredPermits from './RiskAndCompliance/AdExpiredPermits';
import AdSafetyWarnings from './RiskAndCompliance/AdSafetyWarnings';
import AdSuspiciousActivityFlags from './RiskAndCompliance/AdSuspiciousActivityFlags';
import AdVerification from './RiskAndCompliance/AdVerification';

function RiskAndCompliance() {
    //variables
    const adArr = ['expired-permits', 'safety-warnings', 'suspcious-activity-flags', 'verification']
    //state management
    const[currentAd, setCurrentAd] = useState(adArr[0]);
    //handlers
    const handleCurrentAd = () => {
        if(currentAd === 'expired-permits') {
            return <AdExpiredPermits/>
        }
        if(currentAd === 'safety-warnings') {
            return <AdSafetyWarnings/>
        }
        if(currentAd === 'suspicious-activity-flags') {
            return <AdSuspiciousActivityFlags/>
        }
        if(currentAd === 'verification') {
            return <AdVerification/>
        }
    }
    //lifecycle methods
    useEffect(() => {
        let currentIndex = 0;

        const interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % adArr.length;

        setCurrentAd(adArr[currentIndex]);
        }, 15000);

        return () => {
            clearInterval(interval);
        }
    }, []);
    return (
        <div>
            <h1>
                Risk & Compliance
            </h1>
            <div className='ad'>
                {handleCurrentAd()}
            </div>
        </div>
    )
}

export default RiskAndCompliance;