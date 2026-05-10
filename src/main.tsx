//libs
import {createRoot} from 'react-dom/client';;
import { createBrowserRouter } from 'react-router';
//components
import App from './App';
//context
import GlobalProvider from './contexts/GlobalProvider';
//pages
import Compliance from './components/pages/Compliance/Compliance';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Finance from './components/pages/Finance/Finance';
import Help from './components/pages/Help/Help';
import LandingPage from './components/pages/LandingPage/LandingPage';
import Logistics from './components/pages/Logistics/Logistics';
import Market from './components/pages/Marketplace/Marketplace';
import Preferences from './components/pages/Preferences/Preferences';
import Profile from './components/pages/Profile/Profile';
import Reputation from './components/pages/Reputation/Reputation';
import Safety from './components/pages/Safety/Safety';
import Settings from './components/pages/Settings/Settings';
import SignIn from './components/pages/SignIn/SignIn';
import SignUp from './components/pages/SignUp/SignUp';
import SupplyChain from './components/pages/SupplyChain/SupplyChain';
import Education from './components/pages/Education/Education';
//styles
import './scss/main.scss';
//dom elements
const container = document.querySelector('#root');
if (!container) {
  throw new Error("Root container not found");
}
const root = createRoot(container);

root.render(<GlobalProvider><App/></GlobalProvider>);