import { Link, useLocation } from "react-router-dom";
import {BiUserCircle} from "react-icons/bi";
import {RiDashboard3Fill} from "react-icons/ri";
import {FaBook} from "react-icons/fa";
import {BsFillCalendar2WeekFill} from "react-icons/bs";
import {BsInboxesFill} from "react-icons/bs";
import {AiOutlineClockCircle} from "react-icons/ai";
import {FaComputer} from "react-icons/fa6";
import {FaFileImport} from "react-icons/fa";
import {BsQuestionCircle} from "react-icons/bs";

import "./index.css";

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar","Inbox","History","Studio","Commons","Help"];
    const linkToIconMap = {
        Account: <BiUserCircle className="wd-kanbas-acc"/>,
        Dashboard: <RiDashboard3Fill className="wd-kanbas-images"/>,
        Courses: <FaBook className="wd-kanbas-images"/>,
        Calendar: <BsFillCalendar2WeekFill className="wd-kanbas-images"/>,
        Inbox: <BsInboxesFill className="wd-kanbas-images"/>,
        History: <AiOutlineClockCircle className="wd-kanbas-images"/>,
        Studio: <FaComputer className="wd-kanbas-images"/> ,
        Commons: <FaFileImport className="wd-kanbas-images"/> ,
        Help: <BsQuestionCircle className="wd-kanbas-images"/>,

    };
    const { pathname } = useLocation();
    return (
        <div className="wd-kanbas-navigator " style={{ width: 80 }}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item ${pathname.includes(link) ? "active-link" : ""} centered-content`}>
                    {linkToIconMap[link]}
                    {link}
                </Link>
            ))}
        </div>
    );
}
export default KanbasNavigation;