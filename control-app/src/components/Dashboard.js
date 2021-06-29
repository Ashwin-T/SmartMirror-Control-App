import { Link } from "react-router-dom";

const Dashboard= () => {
    return ( 
        <>
            <Link to = '/todo'>
                <button className="buttonz bntTodo">To Do</button>
            </Link>
            <Link to = '/nav'>
                <button className="buttonz bntNav">Navigation</button>
            </Link>
        </>
     );
}
 
export default Dashboard;