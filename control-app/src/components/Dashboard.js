import { Link } from "react-router-dom";

const Dashboard= () => {
    return ( 
        <div>
        <Link to = '/todo'>
            <button className="bntTodo">ToDo</button>
        </Link>
        <Link to = '/nav'>
            <button className="bntNav">Navigation</button>
        </Link>
        <Link to = '/alarm'>
            <button className="btnClock">Alarm</button>
        </Link>


        </div>
     );
}
 
export default Dashboard;