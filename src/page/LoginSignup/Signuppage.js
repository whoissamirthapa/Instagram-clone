import React, { Fragment, useState } from 'react';

import classes from './Signuppagestyle.module.css';
import logo from '../../assets/logo.png';
import facebookLogo from '../../assets/Facebook-logo.png';
import appIcon from '../../assets/appstoreinsta.png';
import appIconG from '../../assets/playstoreinsta.png';
import { nanoid } from 'nanoid';
import { signup } from '../../firebase';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


const SignUp = () => {

    const id = nanoid();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        id:"",
        email: "",
        fullname: "",
        username: "",
        password:""
    })

    const [loading,setLoading] = useState(false);

    const date = new Date();
    const year = date.getFullYear();


    const inputChangeHandler = (e) =>{

        setUserData(prevState=>{
            return {
                ...prevState,
                [e.target.name]:e.target.value,
                id:id
            }
        });

    }


    const submitHandler = async(e) =>{
        e.preventDefault();
        setLoading(true);
        if( userData.fullname.trim().length < 2 || 
            userData.email.trim().length < 4 || 
            userData.password.trim().length < 6 || 
            userData.username.trim().length < 3 ){
            alert("data should be valid");
            return;
        }
        
        //user signup using firebase auth
        try {
            await signup(userData.email,userData.password);
            
        } catch (error) {
            alert("Error in Registering");
        }
        
        //adding extra to real time database of user
        try {
            
            await fetch("https://instaclone2423-default-rtdb.firebaseio.com/userData.json",
            {
                method: "POST",
                body: JSON.stringify(userData),
                headers: {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            })
            setLoading(false);
            navigate("/home");
        } catch (error) {
            console.log(error);
        }

       
       
    }

    return (
        <Fragment>
            <div className={classes.signgup_container+ " mt-12"}>
                
                { /*-----------SignUp form--------------  */}
                <div className={classes.signin_aside}>
                    <div className={classes.signin_form+ " border-2 p-8"}>
                        <header className={classes.signin_logo_container+ " p-4"}>
                        <img src={logo} alt="Istagram" className={classes.logo_signin} />
                        </header>
    
                        
                        <div className={classes.header_signup_desc}>
                        <p>
                            Sign up to see photos and videos from your friends.
                        </p>
                        </div>
                        <div className={classes.signup_with_facebook+ " mt-20 mx-8"}>
                        <a href='#' >
                            <button className={classes.signup_with_fb_btn}>
                                <img 
                                   src={facebookLogo} 
                                   alt="facebook logo" 
                                   height={"20px"}
                                   width={"15px"} 
                                   style={{
                                       display:"inline-block"
                                   }}
                                /> Login With Facebook
                            </button>
                        </a>
                        </div>
    
                        <div className={classes.or_container} >
                        <div className={classes.or_left}></div>
                        <div className={classes.or_itself}>OR</div>
                        <div className={classes.or_right}></div>
                        </div>
    
                        <div className={classes.sign_form_container}>
                            <form onSubmit={submitHandler}>
                                <div className={classes.first_login_input} >
                                    <input 
                                        type={"email"} 
                                        placeholder="Email" 
                                        id='email' 
                                        name='email'
                                        value={userData.email}
                                        onChange={inputChangeHandler}
                                    />
                                </div>
                                <div className={classes.signup_with_extra_input} >
                                    <input 
                                        type={"text"}
                                        placeholder="Full name"
                                        id='fullname'
                                        name='fullname'
                                        value={userData.fullname}
                                        onChange={inputChangeHandler}
                                    />
                                </div>
                                <div className={classes.signup_with_extra_input} >
                                    <input 
                                        type={"text"}
                                        placeholder="Username"
                                        id='username'
                                        name='username'
                                        value={userData.username}
                                        onChange={inputChangeHandler}
                                    />
                                </div>
                                <div className={classes.second_login_input_pw} >
                                    <input 
                                        type={"password"}
                                        placeholder="Password"
                                        id='password'
                                        name='password'
                                        value={userData.password}
                                        onChange={inputChangeHandler}
                                    />
                                </div>
                                <div className={classes.signin_btn}>
                                    <button> { loading ? "Registering":"Sign up"}</button>
                                </div>
                            </form>
                        </div>
                        
                        <div className={classes.signup_data_policy}>
                        By signing up, you agree to our 
                        <a href='#'><strong>Terms</strong></a> , 
                        <a href='#'><strong>Data Policy</strong></a> and 
                        <a href="#"><strong>Cookies Policy</strong></a>
                        
                        </div>
                    </div>
    
                    { /*----------don't have account------ */}
                    <div className={classes.sign_in_dont_have_acc+ " my-8 border-2"}>   
                    <p>Have an account?&nbsp; 
                        <Link to='/login'>
                            <b>
                                Sign In
                            </b>
                        </Link>
                    </p>
                    </div>
    
                    {/* get the app */}
                    <div className={classes.get_app_signin}>
                    <header style={{ textAlign: "center"}}>
                        Get the app
                    </header>
                    <article className={classes.get_app_signin_container}>
                        <div>
                           <img src={appIcon} alt="appstore app" />
                        </div>
                        <div>
                           <img src={appIconG} alt="appstore app" />
                        </div>
                    </article>
                    </div>
                </div>
                
            </div>

            <footer className={classes.footer_signup}>
                <div>
                    <a href="#">About</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='#'>Blog</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='#'>Jobs</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='#'>Help</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='#'>API</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='#'>Privacy</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='#'>Terms</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='#'>Top Accounts</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='#'>Hashtags</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='#'>Locations</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='#'>Instagram Lite</a>
                </div>
                
                <div className='mt-8'>
                    &copy;&nbsp;{year}&nbsp;Instagram from Meta
                </div>
            </footer>
        </Fragment>
  )
}

export default SignUp