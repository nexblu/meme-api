import { Form, Button } from 'react-bootstrap';

const FormLogin = () => {
    return (
        <Form className='me-3 ms-3 mt-3'>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" className='mb-3'>Login</Button>{' '}
            <div className="d-flex flex-row mb-3">
                <div className="">Dont Have Account?</div>
                <a href="/register" className="ms-2">Register</a>
            </div>
        </Form>
    );
}

export default FormLogin;