import React, { useState, Fragment, useEffect } from 'react';

import classes from './LoginPagestyle.module.css';
import logo from '../../assets/logo.png';
import facebookLogo from '../../assets/Facebook-logo.png';
import appIcon from '../../assets/appstoreinsta.png';
import appIconG from '../../assets/playstoreinsta.png';
import { signIn } from '../../firebase';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


const images = [
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png",
]

const LoginPage = () => {


    const navigate = useNavigate();
    
    //Animation state
    const [image, setImage] = useState({
        index: 0,
        url: images[0],
    });

    //user data state
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })

    //button specific state
    const [disableBtn,setDisableBtn] = useState(true);

    // Animation 
    useEffect(()=>{
        const imageIndentifier = setTimeout(() => {
            if(image.url === images[image.index]){

                const obj = {...image};
               
                if(image.index === (images.length-1)){
                    obj.index = 0;
                    obj.url = images[obj.index];
                    setImage({...obj});
                    return;
                }
                
                obj.index = obj.index + 1;
                obj.url = images[obj.index];
                setImage({...obj});
                
            }
            
        }, 4000);

        return () => {
            clearTimeout(imageIndentifier);
        }

    },[image,images])
    

    //input change handler
    const firstInputChangeHandler = (e) =>{
        setLoginData(prevState=>{
            return {
                ...prevState, email: e.target.value
            }
        })
    }

    const passwordChangeHandler = (e) =>{

        if(e.target.value.trim().length < 6 ){
            setDisableBtn(true);
        }else{
            setDisableBtn(false);
        }

        setLoginData(prevState=>{
            return {
                ...prevState, password: e.target.value
            }
        })
    }

    const loginSubmitHandler = async(e) =>{
        e.preventDefault();
        try {
            await signIn(loginData.email,loginData.password);
            navigate("/home");
        } catch (error) {
            console.log("error while login "+error);
        }

    }

    return (
        <Fragment>
            <div className={classes.signgin_container+ " mt-12"}>
                <div className={classes.signin_image}>
                    <div className={classes.login_images}>
                        <img src={image.url}
                            alt='img'
                        /> 
                    </div>
                </div>
    
                { /*-----------SignIn form--------------  */}
                <div className={classes.signin_aside}>
                    <div className={classes.signin_form+ " border-2 p-8"}>
                        <header className={classes.signin_logo_container+ " p-8"}>
                        <img src={logo} alt="Istagram" className={classes.logo_signin} />
                        </header>
                        <div className={classes.sign_form_container}>
                        <form onSubmit={loginSubmitHandler}>
                            <div className={classes.first_login_input} >
                                <input 
                                    type={"text"} 
                                    placeholder="Email" 
                                    id='email' 
                                    name='email'
                                    value={loginData.email}
                                    onChange={firstInputChangeHandler}
                                />
                            </div>
                            <div className={classes.second_login_input_pw} >
                                <input 
                                    type={"password"}
                                    placeholder="Password"
                                    id='password'
                                    name='password'
                                    value={loginData.password}
                                    onChange={passwordChangeHandler}
                                />
                            </div>
                            <div className={classes.signin_btn}>
                                <button disabled={disableBtn} style={disableBtn?{opacity:"0.4"}:{opacity:"1"}}>Log In</button>
                            </div>
                        </form>
                        </div>
    
                        <div className={classes.or_container} >
                        <div className={classes.or_left}></div>
                        <div className={classes.or_itself}>OR</div>
                        <div className={classes.or_right}></div>
                        </div>
    
                        <div className={classes.login_with_facebook+ " mt-20 mx-8"}>
                        <a href='#' >
                            <img 
                               src={facebookLogo} 
                               alt="facebook logo" 
                               height={"20px"}
                               width={"15px"} 
                            /> Login With Facebook
                        </a>
                    </div>

                    <div className={classes.forget_pw_signin}>
                        <a href='#' >Forgot password ?</a>
                    </div>
                    </div>
    
                    { /*----------don't have account------ */}
                    <div className={classes.sign_in_dont_have_acc+ " my-8 border-2"}>   
                    <p>Don't have an account?&nbsp; 
                        <Link to='/signup'>
                            <b>
                                Sign up
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
        </Fragment>
  )
}

export default LoginPage