import { Form, Button } from "react-bootstrap";
import { useState } from 'react';

const FormSubscribe = () => {
    const [email, setEmail] = useState('');
    const [alert, setAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const onSubscribe = () => {
        const apiUrl = 'http://127.0.0.1:8000/api/v1/email/subscribe';

        const postData = {
            email: 'xafoye4787@cubene.com'
        };

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
            .then(response => response.json())
            .then(data => {
                if (data[0]['nexblu']['status_code'] === 200) {
                    setEmail('')
                    setAlert(true)
                    setAlertMessage('Success Subscribe')
                }
            })
            .catch(error => {
                console.error('Error:', error);
                setAlert(true)
                setAlertMessage('Failed Subscribe')
            });
    }

    const showAlert = () => {
        if (alert) {
            return (
                <>
                    <p className="text-success">{alertMessage}</p>
                </>
            )
        } else {
            return
        }
    }

    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="nexblu@gmail.com" value={email} onChange={e => setEmail(e.target.value)} />
                </Form.Group>
                {showAlert()}
                <Button variant="primary" className="mb-2" onClick={onSubscribe}>
                    Subscribe
                </Button>
            </Form>
        </>
    )
}

export default FormSubscribe;
