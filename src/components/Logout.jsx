import { Button } from "react-bootstrap";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        const accessToken = Cookies.get('access_token');
        if (!accessToken) {
            navigate('/login')
        } else {
            Cookies.remove('access_token');
            navigate('/login')
        }
    }

    return (
        <>
            <Button variant="primary" className="me-3 ms-3 mt-3 btn-logout" onClick={handleLogout}>Logout</Button>{' '}
        </>
    )
}

export default Logout;
