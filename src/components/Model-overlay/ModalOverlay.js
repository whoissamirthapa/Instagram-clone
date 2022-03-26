import React, { Fragment, useContext, useState } from 'react';
import ReactDOM from "react-dom";
import ModalContext from '../../store/modalctx';
import classes from "./ModalOverlay.module.css";

const ModalOverlay = (props) => {

    const modalCtx = useContext(ModalContext);
  return (
    <Fragment>
        {modalCtx.modal && 
        <div className={classes.overlay_container}>
            <div className={classes.modal}>
                <div className={classes.closeModal_container}>
                    <button className={classes.closeModal} onClick={modalCtx.reverseModal}>X</button>
                </div>
                <div>
                    {props.children}
                </div>            
            </div>
        </div> 
        
        }
    </Fragment>
  )
}

export default ModalOverlay

export const Modal = (props)=>{
    return(
        <Fragment>
            {ReactDOM.createPortal(<ModalOverlay >{props.children}</ModalOverlay>, document.getElementById("overlay-item"))}
        </Fragment>
    )
}