//libs
import {createRoot} from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
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

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {index: true, Component: LandingPage},
      {
        path: "sign-in",
        Component: SignIn
      },
      {
        path: "sign-up",
        Component: SignUp
      },
      {
        path: "dashboard",
        Component: Dashboard
      },
      {
        path: "compliance",
        Component: Compliance
      },
      {
        path: "finance",
        Component: Finance
      },
      {
        path: "help",
        Component: Help
      },
      {
        path: "logistics",
        Component: Logistics
      },
      {
        path: "market",
        Component: Market
      },
      {
        path: "preferences",
        Component: Preferences
      },
      {
        path: "profile",
        Component: Profile
      },
      {
        path: "Reputation",
        Component: Reputation
      },
      {
        path: "safety",
        Component: Safety
      },
      {
        path: "settings",
        Component: Settings
      },
      {
        path: "supply-chain",
        Component: SupplyChain
      },
      {
        path: "education",
        Component: Education
      }
    ]
  }
])

root.render(<GlobalProvider><RouterProvider router={router}/></GlobalProvider>);