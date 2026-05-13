//libs
//custom hooks
//import useDashboardContext from "../../../../hooks/use-dashboard-context";
//components
import SimpleMetricCard from "../DataVisualization/SimpleMetricCard";

function TownshipPulse() {
    //context management
    //const {numberOfBusinesses, newBusinessRate} = useDashboardContext();

    return (
        <div className='township-pulse'>
             <h1>
                Township Pulse
            </h1>
            <SimpleMetricCard quantity={150} increaseRate={12} title='Population'/>
        </div>
    )
}

export default TownshipPulse;