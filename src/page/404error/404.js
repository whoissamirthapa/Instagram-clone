import React, { Fragment } from 'react'
import Navbar from '../../components/Navbar';
import classes from './404error.module.css';

const Error404 = () => {
  return (
    <Fragment>
        <Navbar />
        <div className={classes.container_page_not_found}>
            <section>
                <p>
                    Sorry! Page not Found
                </p>
            </section>
        </div>
    </Fragment>
    
  )
}

export default Error404