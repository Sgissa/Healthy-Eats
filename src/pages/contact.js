import React from "react";
import styles from '@/styles/Contact.module.css';
import { useRouter } from "next/router";

export default function Contact(){
    const [fullName, setfullName] = React.useState('First Last');
    const [email, setEmail] = React.useState('info@gmail.com');
  //  let fullName = 'Name';
   // let email = 'info@gmail.com';

   const router = useRouter();

    function contactFormSubmit(e) {
        e.preventDefault();
        if(fullName !== '' && email !== '') {
             router.push('/contact/success')
        }
        else {
            router.push('/contact/failed')
        }

    }

    function updateContactInfo(e) {
        if(e.currentTarget.name === 'fullName') {
           // fullName = e.currentTarget.value;
            setfullName(e.currentTarget.value);
        }
        if(e.currentTarget.name === 'email') {
          //  email = e.currentTarget.value;
            setEmail(e.currentTarget.value);
        }
    }

    return(
        <>
        <form className={styles.form} onSubmit={contactFormSubmit}>

        <h1>Contact</h1> 

        <div className={styles.formField}>
            <label>Full Name:</label>
            <input name='fullName' type='text' placeholder='Name...' onChange={updateContactInfo} value={fullName}/>
        </div>   

        <div className={styles.formField}>
            <label>Email:</label>
            <input name='email' type='text' placeholder='email...' onChange={updateContactInfo} value={email}/>
        </div>   

        <div className={styles.formField}>
            <input type='submit' value='Submit Contact' />
        </div>


        </form>
        
        </>
    )
}