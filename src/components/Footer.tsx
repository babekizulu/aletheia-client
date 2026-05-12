//libs
import { useState } from "react";
//icons
import { LuSun } from "react-icons/lu";
import { IoPartlySunny } from "react-icons/io5";
import { IoSnow } from "react-icons/io5";
import { FaCloudMoonRain } from "react-icons/fa";
import { IoRainy } from "react-icons/io5";
import { BsFillCloudLightningRainFill } from "react-icons/bs";
import { FaCloudSunRain } from "react-icons/fa";
import { TbTemperatureCelsius } from "react-icons/tb";
import { TbTemperatureFahrenheit } from "react-icons/tb";
import { FaTemperatureArrowDown } from "react-icons/fa6";
import { FaTemperatureArrowUp } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";

function Footer() {
    const [townshipName, setTownshipName] = useState('Greenbushes Township');
    const [weather, setWeather] = useState('overcast');
    const [temperature, setTemperature] = useState(18);
    const [temperatureTrend, setTemperatureTrend] = useState('warming');

    return (
        <footer className="footer">
            <article className='footer-location'>
                <CiLocationOn className='footer-icon'/>
                <p>{townshipName}</p>
            </article>
            <article className='footer-weather'>
                <FaCloudMoonRain className='footer-icon'/>
            </article>
            <article className='footer-temperature'>
                {temperature}
                <TbTemperatureCelsius className='footer-icon'/>
            </article>
            <article className='footer-temperature-trend'>
                <FaTemperatureArrowDown className='footer-icon'/>
            </article>
        </footer>
    )
}

export default Footer;