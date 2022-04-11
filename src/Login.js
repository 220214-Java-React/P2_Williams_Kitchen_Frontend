import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "AuthProvider";

import axios from '"http://localhost:8080';  // local server host
const LOGIN_URL = '/login'; // servlet to call from

const Login = () => { // Login in function and form
    const { setAuth } = useContext(AuthContext); // check to see if its an Authetic account
    const userRef = useRef(); //checks for users referencs 
    const errRef = useRef(); // sends error message based on errors

    const [user, setUser] = useState(''); // user set in a userState to track State in the Function
    const [pwd, setPwd] = useState(''); // password of the user in a user state to track during the login
    const [errMsg, setErrMsg] = useState(''); // Custom error message based on log in error, FAILED, unaurthrized, server error.
    const [success, setSuccess] = useState(false); //  Succesful login

    useEffect(() => {
        userRef.current.focus(); //sets focus on the frist input when the compant loads
    }, [])

    useEffect(() => {
        setErrMsg(''); // empty our any error message that might have formed.
    }, [user, pwd])

    const handleSubmit = async (e) => { 
        e.preventDefault();  // reloads the page

        //connect to the backend with axios and stringifys the inputs
        try {
            const response = await axios.post(LOGIN_URL, 
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1> // Indicator that you have successfully logged in
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> // displaces the error message
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />  // userName input 

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        /> //password input
                        <button>Sign In</button> // the sign in button
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            {/*put router link here*/}  // if no account has been created send them to this page
                            <a href="#">Sign Up</a> // will add once I know the page
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Login