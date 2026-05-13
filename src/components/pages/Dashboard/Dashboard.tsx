//libs
import { useState, useEffect } from "react";
//components
import TownshipPulse from "./Quadrant1/TownshipPulse";
import MarketShare from "./Quadrant1/MarketShare";

function Dashboard() {
    //variables
    const q1Arr = ['township-pulse', 'market-share'];
    //state management
    const [currentQ1, setCurrentQ1] = useState(q1Arr[0]);
    const handleCurrentQ1 = () => {
        if(currentQ1 === 'township-pulse') {
            return <TownshipPulse/>
        }
        if(currentQ1 === 'market-share') {
            return <MarketShare/>
        }
    }
    //lifecycle methods
    useEffect(() => {
        let currentIndex = 0;

        const interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % q1Arr.length;

        setCurrentQ1(q1Arr[currentIndex]);
        }, 15000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className='page dashboard'>
            <article className='quandrant-i quadrant'>
               {handleCurrentQ1()}
            </article>
            <article className='quandrant-ii quadrant'>
                Quadrant 2
            </article>
            <article className='quandrant-iii quadrant'>
                Quadrant 3
            </article>
            <article className='quandrant-iv quadrant'>
                Quadrant 4
            </article>
        </section>
    )
}

export default Dashboard;