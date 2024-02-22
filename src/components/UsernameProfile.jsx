import { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import Cookies from 'js-cookie';

const UsernameProfile = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const accessToken = Cookies.get('access_token');
        if (!accessToken) {
            navigate('/login')
        } else {
            fetch(`http://127.0.0.1:5000/api/v1/nexblu/token/${accessToken}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    setUsername(data['username'])
                })
                .catch(error => {
                    console.error('Error:', error);
                    navigate('/login')
                });
        }
    }, []);

    return (
        <>
            <Navbar.Brand href="/#">{username}</Navbar.Brand>
        </>
    );
};

export default UsernameProfile;
