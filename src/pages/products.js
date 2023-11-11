import React from "react";
import styles from '@/styles/products.module.css';
import Prod from "@/components/Proda";


export default function Products(){

    return(
        <>
         <h1 className={styles.header}>Products</h1>
         <h2 className={styles.header}>Fruits</h2>
        <Prod galImage='/apples.jpg' galImage2='/bananas.jpg' galImage3='/grapes.jpg'/>
        <Prod galImage='/mango.jpg' galImage2='/pineapple.jpg' galImage3='/watermelon.jpg'/>
        <h2 className={styles.header}>Protiens</h2>
        <Prod galImage='/beef.jpg' galImage2='/eggs.jpg' galImage3='/salmon.jpg'/>
        </>
    )
}
