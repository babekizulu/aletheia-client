//libs
import { useState, useEffect } from "react";
//components
import Jobs from "./Opportunities/Jobs";
import LogisticsRequests from "./Opportunities/LogisticsRequests";
import MarketplaceDemand from "./Opportunities/MarketplaceDemand";
import SupplyNeeds from "./Opportunities/SupplyNeeds";

function Opportunities() {
    //variables
    const opportunitiesArr = ['jobs', 'logistics-requests', 'marketplace-demand', 'supply-needs'];
    //state management
    const [opportunity, setOpportunity] = useState(opportunitiesArr[0]);
    //handlers
    const handleCurrentOpportunity = () => {
        if(opportunity === 'jobs') {
            return <Jobs/>
        }
        if(opportunity === 'logistics-requests') {
            return <LogisticsRequests/>
        }
        if(opportunity === 'marketplace-demand') {
            return <MarketplaceDemand/>
        }
        if(opportunity === 'supply-needs') {
            return <SupplyNeeds/>
        }
    }
    //lifecycle methods
    useEffect(() => {
        let currentIndex = 0;

        const interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % opportunitiesArr.length;

        setOpportunity(opportunitiesArr[currentIndex]);
        }, 15000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className="opportunities">
            <h1>Opportunities</h1>
            <div className='ad'>
                {handleCurrentOpportunity()}
            </div>
        </div>
    )
}
export default Opportunities;