//libs
import useDashboardContext from "../../../../hooks/use-dashboard-context";
import DonutChart from "../DataVisualization/DonutChart";

function MarketShare() {
    const {industries}  = useDashboardContext();
    return (
        <div className='market-share'>
            <h1>
                Township Market Share
            </h1>
            <DonutChart data={industries}/>
        </div>
    )
}

export default MarketShare;