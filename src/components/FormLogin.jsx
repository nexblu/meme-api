import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();

    const onLogin = () => {
        fetch(`http://127.0.0.1:5000/api/v1/nexblu/login/${username}/${password}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data['status_code'] === 200) {
                    const token = data['token'];
                    Cookies.set('access_token', token);
                    navigate('/')
                    clearForm()
                }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    const validation = () => {
        for (let i = 0; i < 3; i++) {
            let isError = false;
            if (username === '') {
                setUsernameError('This value is required.');
                isError = true;
            } else {
                setUsernameError('');
            }
            if (password === '') {
                setPasswordError('This value is required.');
                isError = true;
            } else {
                setPasswordError('');
            }
            return isError;
        }
    }

    const clearForm = () => {
        setUsernameError('');
        setUsername('');
        setPasswordError('');
        setPassword('');
    }

    const handleSubmit = () => {
        const resultValidation = validation()
        if (resultValidation === false) {
            onLogin()
        }
    }

    return (
        <Form className='me-3 ms-3 mt-3'>
            <Form.Group className="mb-3" controlId="formGroupText">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} className={`${usernameError === 'This value is required.' ? 'border-danger' : ''}`} />
                {usernameError === 'This value is required.' ? <p className='text-danger'>{usernameError}</p> : ''}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className={`${passwordError === 'This value is required.' ? 'border-danger' : ''}`} />
                {passwordError === 'This value is required.' ? <p className='text-danger'>{passwordError}</p> : ''}
            </Form.Group>
            <Button variant="primary" className='mb-3' onClick={handleSubmit}>Login</Button>{' '}
            <div className="d-flex flex-row mb-3">
                <div className="">Dont Have Account ?</div>
                <a href="/register" className="ms-2">Register</a>
            </div>
        </Form>
    );
}

export default FormLogin;