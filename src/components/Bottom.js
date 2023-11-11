import React from "react";
import styles from "@/styles/bottom.module.css";


export default function bottom(gal) {

    return(
        <>
        <h2 className={styles.title}>Examples Of Healthy Foods</h2>
        <div className={styles.gallery}>
            <div className={styles.galHolder} style={{backgroundImage: `url(${gal.galImage})`}}>
            </div>
            <div className={styles.galHolder2} style={{backgroundImage: `url(${gal.galImage2})`}}></div>
            <div className={styles.galHolder3} style={{backgroundImage: `url(${gal.galImage3})`}}></div>
        </div>
        </>
    )
}