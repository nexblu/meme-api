import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const FormRegister = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onRegister = () => {
        if (email !== '') {
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
    }

    return (
        <Form className='me-3 ms-3 mt-3'>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" className='mb-3' onClick={onRegister}>Register</Button>{' '}
        </Form>
    );
}

export default FormRegister;