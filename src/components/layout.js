import React from "react";
import  * as styles from './layout.module.scss'
import Header from "./header";
import Footer from "./footer"

export default ({children}) => (
    <div className={styles.container}>
        <Header />
        <div className={styles.content}>
            {children}
        </div>
        <Footer />
    </div>
)