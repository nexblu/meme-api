import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const FormLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(true);

    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const onRegis = () => {
        const url = 'http://localhost:8000/api/v1/meme-api/register';
        const data = {
            email: email,
            password: password
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                return response.json();
            })
            .then(json => {
                console.log('Response:', json);
                if (json[0]['meme-api']['status_code'] === 201) {
                    setEmail('');
                    setPassword('');
                }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    const validation = () => {
        for (let i = 0; i < 2; i++) {
            if (username === '') {
                setUsernameError('This value is required.');
                setError(true);
            } else {
                setUsernameError('');
                setError(false);
            }
            if (password === '') {
                setPasswordError('This value is required.');
                setError(true);
            } else {
                setPasswordError('');
                setError(false);
            }
        }
    }

    const handleSubmit = () => {
        validation()
        console.log(error)
    }

    return (
        <Form className='me-3 ms-3 mt-3'>
            <Form.Group className="mb-3" controlId="formGroupText">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} className={`${usernameError === 'This value is required.' ? 'border-danger': ''}`} />
                {usernameError === 'This value is required.' ? <p className='text-danger'>{usernameError}</p>: ''}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className={`${passwordError === 'This value is required.' ? 'border-danger': ''}`}/>
                {passwordError === 'This value is required.' ? <p className='text-danger'>{passwordError}</p>: ''}
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