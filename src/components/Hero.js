import React from "react";
import styles from "@/styles/hero.module.css";
export default function Hero(props) {
    return(
        <>
        <div className={styles.hero} style={{backgroundImage: `url(${props.heroImage})`, height: props.height }}>
        {props.header}
        </div>
        </>
    )
}