import { Link } from "react-router-dom";

const Topbar = () => {
    return ( 
        <Link to = '/'>
            <div className = 'dashboard'>
                <div className = 'dashboardText'>
                    SmartMirror Control Panel
                </div>
            </div>
        </Link>
     );
}
 
export default Topbar;