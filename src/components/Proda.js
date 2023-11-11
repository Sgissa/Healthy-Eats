import React from "react";
import styles from '@/styles/proda.module.css';


export default function(props){

    return(
        <>
        <div className={styles.gallery}>
            <div className={styles.galHolder} style={{backgroundImage: `url(${props.galImage})`}}>
            </div>
            <div className={styles.galHolder2} style={{backgroundImage: `url(${props.galImage2})`}}></div>
            <div className={styles.galHolder3} style={{backgroundImage: `url(${props.galImage3})`}}></div>
        </div>
        </>
    )
}