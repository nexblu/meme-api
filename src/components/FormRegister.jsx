import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';

const FormRegister = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [error, setError] = useState('');

    const navigate = useNavigate();

    const alertRegis = (err) => {
        if (err) {
            setError(<Alert key={'danger'} variant={'danger'}>
                Username/Email Already Exist
            </Alert>)
        } else {
            setError('')
        }
    }

    const onRegis = () => {
        fetch(`http://127.0.0.1:5000/api/v1/nexblu/register/${username}/${email}/${password}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data['message'] === 'success create user') {
                    navigate('/login')
                    clearForm();
                } else {
                    alertRegis(true)
                }
            })
            .catch(error => {
                alertRegis(true)
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
            if (email === '') {
                setEmailError('This value is required.');
                isError = true;
            } else {
                setEmailError('');
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
        setEmailError('');
        setEmail('');
        setPasswordError('');
        setPassword('');
    }

    const handleSubmit = () => {
        const resultValidation = validation()
        if (resultValidation === false) {
            onRegis()
        }
    }

    return (
        <Form className='me-3 ms-3 mt-3'>
            {error}
            <Form.Group className="mb-3" controlId="formGroupText">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} className={`${usernameError === 'This value is required.' ? 'border-danger' : ''}`} />
                {usernameError === 'This value is required.' ? <p className='text-danger'>{usernameError}</p> : ''}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className={`${emailError === 'This value is required.' ? 'border-danger' : ''}`} />
                {emailError === 'This value is required.' ? <p className='text-danger'>{emailError}</p> : ''}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className={`${passwordError === 'This value is required.' ? 'border-danger' : ''}`} />
                {passwordError === 'This value is required.' ? <p className='text-danger'>{passwordError}</p> : ''}
            </Form.Group>
            <Button variant="primary" className='mb-3' onClick={handleSubmit}>Register</Button>{' '}
            <div className="d-flex flex-row mb-3">
                <div className="">Have Account ?</div>
                <a href="/login" className="ms-2">Login</a>
            </div>
        </Form>
    );
}

export default FormRegister;