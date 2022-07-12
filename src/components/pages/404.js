import ErrorMessage from "../errorMessage/ErrorMessage"
import { Link } from "react-router-dom"

const Page404 = () => {

    return (
        <div>
            <ErrorMessage/>
            <p style={{'textAlign': 'center', 'fontSize' : '24px', 'fontWeight' : 'bold'}}>Page doesn't exist</p>
            <Link style={{'display' : 'block','margin-top' : '30px','textAlign': 'center', 'fontSize' : '24px', 'fontWeight' : 'bold'}} to="/">Back to main page</Link>
        </div>
    )
}

export default Page404;