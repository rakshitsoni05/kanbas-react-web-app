import * as client from './client.js';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';

function Account() {
    const { id } = useParams();
    const [account, setAccount] = useState(null);
    const findUserById = async (id) => {
        const user = await client.findUserByUsername(id);
        setAccount(user);
    };
    const navigate = useNavigate();
    const fetchAccount = async () => {
        const userDetails = await client.account();
        console.log("User info " + userDetails);
        setAccount(userDetails);
    };
    const signout = async () => {
        await client.signout();
        navigate("/Kanbas/signin");
    };
    useEffect(() => {
        if (id) {
            findUserById(id);
        } else {
            fetchAccount();
        }
    }, []);
    const save = async () => {
        await client.updateUser(account);
    };
    return (
        <div className="w-50">
            <h1>Account</h1>
            {account && (
                <div style={{display: "flex", flexDirection: "column"}}>
                    <input value={account.password}
                           placeholder='password'
                           onChange={(e) => setAccount({
                                                           ...account,
                                                           password: e.target.value
                                                       })} />
                    <input value={account.firstName}
                           placeholder='First Name'
                           onChange={(e) => setAccount({
                                                           ...account,
                                                           firstName: e.target.value
                                                       })} />
                    <input value={account.lastName}
                           placeholder='Last Name'
                           onChange={(e) => setAccount({
                                                           ...account,
                                                           lastName: e.target.value
                                                       })} />
                    <input value={account.dob}
                           placeholder='Date of Birth'
                           onChange={(e) => setAccount({
                                                           ...account,
                                                           dob: e.target.value
                                                       })} />
                    <input value={account.email}
                           placeholder='Email'
                           onChange={(e) => setAccount({
                                                           ...account,
                                                           email: e.target.value
                                                       })} />
                    <select onChange={(e) => setAccount({
                                                            ...account,
                                                            role: e.target.value
                                                        })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <button onClick={save}>
                        Save
                    </button>
                    <button onClick={signout}>
                        Signout
                    </button>
                    <Link to="users" className="btn btn-warning w-100">
                        Users
                    </Link>


                </div>
            )}
        </div>
    );
}

export default Account;