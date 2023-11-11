import React from "react";
import styles from '@/styles/Home.module.css';
import Hero from '@/components/Hero';
// import Navbar from "@/components/Navbar";
import Mid from "@/components/Mid";
import Bottom from "@/components/Bottom";


export default function Home(){
  return(
    <>
    {/* <Navbar/> */}
    <Hero heroImage='/hero-image.jpg' height='200px' header='Healthy Eats'/>
    <h1 className={styles.bigRedFont}>Home</h1>
    <Mid/>    
    <Bottom galImage='/apples.jpg' galImage2='/bananas.jpg' galImage3='/grapes.jpg' />
    </>
  )
}

