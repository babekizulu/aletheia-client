//libs
import { Outlet } from "react-router";
//components
import Header from "./components/Header";
import SidebarMain from "./components/SidebarMain";
import AuxillarySidebar from "./components/AuxillarySidebar";
import Footer from "./components/Footer";

function App() {
    return (
        <div className='app'>
            <Header/>
            <SidebarMain/>
            <Outlet/>
            <AuxillarySidebar/>
            <Footer/>
        </div>
    )
}

export default App;