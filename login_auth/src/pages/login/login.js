import {
   
    Link
} from "@chakra-ui/react"
import { Link as ReactRouterLink ,useHistory} from "react-router-dom"

const Login = () =>{
 return (
 <>
 <h1>Welcome to Home Page</h1>,
 <Link as={ReactRouterLink} color="green.500" to="/" justifyContent="center" margin="5px" border="2px solid blue">
                            Log out
                        </Link>
    </>
    )
}
export default Login