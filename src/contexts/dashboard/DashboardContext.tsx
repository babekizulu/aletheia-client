//libs
import { createContext, useState, useEffect } from "react";
import axios from 'axios';
import type { Props, ObjectArray} from "../../types/common";
import type { Dashboard } from "../../types/dashboard";
//import type { DonutChartProps } from "../../types/data-visualization";

const DashboardContext = createContext<Dashboard | undefined>(undefined);

function Provider({children}: Props) {
    //state management
    const [numberOfBusinesses, setNumberOfBusinesses] = useState(0);
    const [newBusinessRate, setNewBusinessRate] = useState(0);
    const [industries, setIndustries] = useState([
                    {
                        name: "Food Retail",
                        value: 40
                    },
                    {
                        name: "Hair Salons",
                        value: 40
                    },
                    {
                        name: "Handigas Suppliers",
                        value: 20
                    },
                    {
                        name: "Brick Suppliers",
                        value: 10
                    }
                ]);
    const [jobsList, setJobsList] = useState<ObjectArray>([]);
    //variables
    const baseURL = import.meta.env.VITE_PRODUCTION_URL || import.meta.env.VITE_DEVELOPMENT_URL;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/${baseURL}/dashboard`);
                const {data} = res;
                setNumberOfBusinesses(data.numberOfBusinesses);
                setNewBusinessRate(data.newBusinessRate);
                setIndustries(data.industries);
                setJobsList(data.jobsList);
            } catch (err) {
                console.error(err);
            }
        }
        fetchData();
    },[]);
    //handlers

    const values: Dashboard = {
        children,
        numberOfBusinesses,
        setNumberOfBusinesses,
        newBusinessRate,
        setNewBusinessRate,
        industries,
        setIndustries,
        jobsList,
        setJobsList
    }

    return (
        <DashboardContext.Provider value={values}>
            {children}
        </DashboardContext.Provider>
    )
};

export {DashboardContext, Provider}

