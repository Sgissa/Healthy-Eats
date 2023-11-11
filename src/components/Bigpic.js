import React from "react";
import styles from "@/styles/bigp.module.css";

export default function Pic(props){

    return(
        <>
        <div className={styles.view} style={{backgroundImage: `url(${props.insert})`}}> 
        </div>
        </>
    )
}