import React from "react";
import styles from "@/styles/about.module.css";
import Bigpic from "@/components/Bigpic";

export default function About() {
    return(
        <>
        <h1 className={styles.title}>About</h1>
        <p className={styles.para}>Welcome to Healthy Eats, a dedicated space crafted with a passion for promoting holistic well-being through the power of healthy eating. Our mission is to inspire and guide individuals on their journey towards a better, healthier life by cultivating mindful and nutritious eating habits. Here, we believe that what you put on your plate is not just a meal but a vital aspect of self-care. Our platform is a resource hub that blends the latest nutritional insights with practical tips, mouthwatering recipes, and personalized guidance to empower you to make informed choices about your diet. Whether you're a seasoned health enthusiast or just starting on the path to wellness, Healthy Eats  is your trusted companion, providing a supportive community and a wealth of information to help you nourish your body, mind, and soul. Join us in embracing the transformative potential of food, and let's embark on a journey to a healthier, more vibrant you.</p>
        <Bigpic insert='/about.jpg'/>
        </>


    )



}