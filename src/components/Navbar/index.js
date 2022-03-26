import React, { Fragment, useContext, useEffect, useState } from 'react'

import classes from './style.module.css';

import logo from '../../assets/logo.png';
import homeIcon from '../../assets/homeicon.png';
import messgeIcon from '../../assets/messageicon.png';
import plusIcon from '../../assets/plusicon.png';
import exploreIcon from '../../assets/exploreicon.png';
import notificationIcon from '../../assets/notificationicon1.png';
import avatar from '../../assets/avatar.jpg';
import { listImages, logOut } from '../../firebase';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Modal } from '../Model-overlay/ModalOverlay';
import ModalContext from '../../store/modalctx';
import { GettingAuthData, upload } from '../../firebase';


const Navbar = () => {

    const navigate = useNavigate();
    const modalCtx = useContext(ModalContext);

    const [tool,setTool] = useState(false);
    const [photo,setPhoto] = useState(null);
    const [loading,setLoading] = useState(false);


    const toggleHandleTool=()=>{
        if(tool){
            setTool(false);
            return;
        }else{
            setTool(true);
        }
    }

    //logout handling
    const logOutHandle = async()=>{
        try {
            await logOut();
            navigate("/login");
        } catch (error) {
            console.log("error while logout "+ error);
        }
    }

    //current user 
    const currentUser = GettingAuthData();

    //file handle change
    const fileHandleChange = (e) =>{
        if(e.target.files[0]){
            setPhoto(e.target.files[0]);
        }
    }

    const handleFileSubmit = (e)=>{
        e.preventDefault();
        upload(photo,currentUser,setLoading)
        modalCtx.reverseModal();

    }
  return (
    <Fragment>
        <nav className='h-25 border-b-2 py-4 px-4 bg-white '>
            <div className={classes.cotainer_nav + " lg:w-3/5 m-auto"} >
                <div className={ classes.logo_container +' flex justify-between'}>
                    <div className={ classes.logo }>
                        <Link to={"/home"}>
                            <img src={logo} alt="logo instagram" />
                        </Link>
                    </div>
                    <div className={classes.input_nav_cotainer}>
                        <form>
                            <input type={"text"} className={classes.nav_search} placeholder="Search"/>
                        </form>
                    </div>
                </div>
                <div className={ classes.icons_nav +' flex justify-around px-4'}>
                    <div className={classes.ind_icon_cont}> 
                        <Link to={"/home"}>
                            <img 
                                src={homeIcon} 
                                alt='home icon' 
                                height={"30px"} 
                                width={"30px"} 
                            />
                        </Link>
                    </div>
                    <div className={classes.ind_icon_cont}> 
                        <img 
                            src={messgeIcon} 
                            alt='message icon' 
                            height={"28px"} 
                            width={"28px"}
                            style={{
                                display:"inline-block",
                                marginTop:"0.3rem"
                            }}
                        />
                    </div>
                    <div className={classes.ind_icon_cont}> 
                        <img 
                            src={plusIcon} 
                            alt='plus icon' 
                            height={"35px"} 
                            width={"35px"} 
                            style={{
                                display:"inline-block", 
                                marginTop:"-2px"
                            }} 
                            onClick={modalCtx.changeModal}
                        />
                    </div>
                    <div className={classes.ind_icon_cont}> 
                        <img src={exploreIcon} 
                            alt='explore icon' 
                            height={"25px"} 
                            width={"25px"} 
                            style={{
                                display:"inline-block",
                                marginTop: "0.3rem"
                            }}
                        />
                    </div>
                    <div className={classes.ind_icon_cont}> 
                        <img 
                            src={notificationIcon} 
                            alt='notification icon' 
                            height={"28px"} 
                            width={"28px"} 
                            style={{
                                display:"inline-block",
                                marginTop: "0.2rem"
                            }}
                        />
                    </div>
                    <div className={classes.ind_icon_cont+ "  relative"}> 
                        <img 
                            src={avatar} 
                            className="rounded-full" 
                            alt='avatar' 
                            height={"30px"} 
                            width={"28px"}
                            style={{
                                display:"inline-block",
                                marginTop: "0.2rem"
                            }} 
                            onClick={toggleHandleTool}
                        />
                        { tool && <span className={ classes.toolTipHandler+ ' inline-block border-2'}>
                            <button>Profile</button>
                            <button>Settings</button>
                            <button onClick={logOutHandle}>Log out</button>
                        </span> }
                    </div>

                </div>
            </div>
            
        </nav>

        <Modal >
            <form onSubmit={handleFileSubmit}>
                <input type={"file"} id={"file"} name={"file"} onChange={fileHandleChange}/> <br />
                <button className='inline-block mt-4 bg-gray-300 px-8 py-4 hover:shadow-xl rounded-md'>Post</button>
            </form>    
        </Modal>
    </Fragment>
  )
}

export default Navbar;