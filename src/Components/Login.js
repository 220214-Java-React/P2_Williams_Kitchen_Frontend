import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../AuthProvider";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';


 // local server host
const LOGIN_URL = 'http://localhost:8080/users'; // servlet to call from

const Login = () => { // Login in function and form
    const { setAuth } = useContext(AuthContext); // check to see if its an Authetic account
    const userRef = useRef(); //checks for users referencs 
    const errRef = useRef(); // sends error message based on errors

    const [user, setUser] = useState({})
    const [username, setUsername] = useState(''); // user set in a userState to track State in the Function
    const [password, setPwd] = useState(''); // password of the user in a user state to track during the login
    const [errMsg, setErrMsg] = useState(''); // Custom error message based on log in error, FAILED, unaurthrized, server error.
    const [success, setSuccess] = useState(false); //  Succesful login
    const [response, setResponse] = useState("")

    useEffect(() => {
        userRef.current.focus(); //sets focus on the frist input when the compant loads
    }, [])

    useEffect(() => {
        setErrMsg(''); // empty our any error message that might have formed.
    }, [username, password])

    const handleSubmit = async (e) => { 
        e.preventDefault();  // reloads the page

        //connect to the backend with axios and stringifys the inputs
        try {
            setResponse( await axios.post(LOGIN_URL + "/"+ username, JSON.stringify({ username, password })).then(response => response.data))

            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ username, password, roles, accessToken });
            setUsername('');
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
            
            <Header/>

            {success ? (
                <section>
                    {console.log(`the current user is ${response.username}`)}
                    <h1>You are logged in!</h1> // Indicator that you have successfully logged in
                    <br />
                    <p>
                        <a><Link to="/" state={response}>Go to Home</Link></a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> 
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required
                        />  

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={password}
                            required
                        /> 
                        <button>Sign In</button> 
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            {/*put router link here*/}  
                            <a><Link to="/Register">Sign Up</Link></a> 
                        </span>
                    </p>
                </section>
            )}

            <Footer />
        </>
    )
}

export default Login
