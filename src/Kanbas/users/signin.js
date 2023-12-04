import * as client from './client.js';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function Signin() {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigate = useNavigate();
    const signin = async () => {
        console.log(credentials);
        await client.signin(credentials);
        navigate('/Kanbas/Account');

    };
    return (
        <div>
            <h1>Signin</h1>
            <input type="text" value={credentials.username}
                   onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
            <br/>
            <br/>
            <input type="password" value={credentials.password}
                   onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
            <br/>
            <br/>
            <button onClick={signin}>Signin</button>
            <br/>
            <br/>
            <Link to="../signup">Sign Up</Link>
        </div>
    );
}

export default Signin;