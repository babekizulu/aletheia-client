//icons
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
//custom hooks
import useDashboardContext from "../../../../../hooks/use-dashboard-context";


function Jobs() {
    const {jobsList} = useDashboardContext();

    return (
        <div className='jobs'>
            <h1>Jobs</h1>
            <MdArrowBackIos/>
            <div className='job-container'>
                <h2>{jobsList.title}</h2>
                <p>{jobsList.description}</p>
            </div>
            <MdArrowForwardIos/>
        </div>
    )
}

export default Jobs;