//libs
import { useState, useEffect } from "react";
//components
import TownshipPulse from "./Quadrant1/TownshipPulse";
import MarketShare from "./Quadrant1/MarketShare";
import Opportunities from "./Quadrant2/Opportunities";
import RiskAndCompliance from "./Quadrant2/RiskAndCompliance";
import EducationProgress from "./Quadrant3/EducationProgress.";
import TopGrowingSectors from "./Quadrant3/TopGrowingSectors";
import CommunityExchange from "./Quadrant4/CommunityExchange";
import FinanceSnapshots from "./Quadrant4/FinanceSnapshots";

function Dashboard() {
    //variables
    const q1Arr = ['township-pulse', 'market-share'];
    const q2Arr = ['opportunities', 'risk-and-compliance'];
    const q3Arr = ['education-progress', 'top-growing-sectors'];
    const q4Arr = ['community-exchange', 'finance-snapshot'];
    //state management
    const [currentQ1, setCurrentQ1] = useState(q1Arr[0]);
    const [currentQ2, setCurrentQ2] = useState(q2Arr[0]);
    const [currentQ3, setCurrentQ3] = useState(q3Arr[0]);
    const [currentQ4, setCurrentQ4] = useState(q4Arr[0]);
    //handlers
    const handleCurrentQ1 = () => {
        if(currentQ1 === 'township-pulse') {
            return <TownshipPulse/>
        }
        if(currentQ1 === 'market-share') {
            return <MarketShare/>
        }
    }
    const handleCurrentQ2 = () => {
        if(currentQ2 === 'opportunities') {
            return <Opportunities/>
        }
        if(currentQ2 === 'risk-and-compliance') {
            return <RiskAndCompliance/>
        }
    }
    const handleCurrentQ3 = () => {
        if(currentQ3 === 'education-progress') {
            return <EducationProgress/>
        }
        if(currentQ3 === 'top-growing-sectors') {
            return <TopGrowingSectors/>
        }
    }
    const handleCurrentQ4 = () => {
        if(currentQ4 === 'community-exchange') {
            return <CommunityExchange/>
        }
        if(currentQ4 === 'finance-snapshots') {
            return <FinanceSnapshots/>
        }
    }
    //lifecycle methods
    useEffect(() => {
        let currentIndex = 0;

        const interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % q1Arr.length;

        setCurrentQ1(q1Arr[currentIndex]);
        }, 15000);

        const interval2 = setInterval(() => {
            
        setCurrentQ2(q2Arr[currentIndex]);
        }, 15000);
        const interval3 = setInterval(() => {
            
        setCurrentQ3(q3Arr[currentIndex]);
        }, 15000);
        const interval4 = setInterval(() => {
            
        setCurrentQ4(q4Arr[currentIndex]);
        }, 15000);

        return () => {
            clearInterval(interval);
            clearInterval(interval2);
            clearInterval(interval3);
            clearInterval(interval4);
        }
    }, []);

    return (
        <section className='page dashboard'>
            <article className='quandrant-i quadrant'>
               {handleCurrentQ1()}
            </article>
            <article className='quandrant-ii quadrant'>
                {handleCurrentQ2()}
            </article>
            <article className='quandrant-iii quadrant'>
                {handleCurrentQ3()}
            </article>
            <article className='quandrant-iv quadrant'>
                {handleCurrentQ4()}
            </article>
        </section>
    )
}

export default Dashboard;