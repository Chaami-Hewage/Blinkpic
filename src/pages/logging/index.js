import React from 'react';
import { BiSolidUserCircle } from 'react-icons/bi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import './Style.css';

function LoggingForm(props) {
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate('/signup');
    };

    const handleHomeClick = () => {
        navigate('/home');
    }

    return (
        <form action={props.action} method={props.method}>
            <h1 className="h1-text">Login</h1>

            <div className="input-box">
                <label htmlFor="username"></label>
                <input type="text" name="username" id="username" placeholder="User name:" />
                <BiSolidUserCircle className="icon" />
            </div>
            <div className="input-box">
                <label htmlFor="password"></label>
                <input type="password" name="password" id="password" placeholder="Password:" />
                <RiLockPasswordFill className="icon" />
            </div>

            <div className="remember-me">
                {/*<input type="checkbox" name="remember" id="remember" />*/}
                {/*<p>Remember me</p>*/}

                <a href="#" className="forgot-pw">
                    Forgot password?
                </a>
            </div>

            <input type="submit" value="Login" className="button" onClick={handleHomeClick} />

            <div className="sign-up">
                <p>
                    Don't have an account?{' '}
                    <a href="#" onClick={handleSignUpClick}>
                        Sign up
                    </a>
                </p>
            </div>
        </form>
    );
}

class Logging extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="wrapper">
                        <LoggingForm action={this.props.action} method={this.props.method} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Logging;
