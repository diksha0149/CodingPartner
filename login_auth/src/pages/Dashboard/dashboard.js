import {
   
    Link
} from "@chakra-ui/react"
import { Link as ReactRouterLink ,useHistory} from "react-router-dom"

const Dashboard = () =>{
    const history =useHistory();
    return  (<Link><button>Proceed to signup/Login</button></Link>);
    //dashboard
}
export default Dashboard;