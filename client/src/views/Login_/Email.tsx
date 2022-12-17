/**
 * Phone login button
 */
import { Component } from 'solid-js';
import styles from '@views/Login.module.css';
import { RecaptchaVerifier, getAuth } from 'firebase/auth';
import { useFirebaseApp } from 'solid-firebase';
import Button from '@suid/material/Button';
import Email from '@suid/icons-material/Email';

const PhoneLogin: Component = () => {
  const app = useFirebaseApp();
  const signIn = () => {
    /*
    try {
      const applicationVerifier = new RecaptchaVerifier('recaptcha-container');
      const provider = new PhoneAuthProvider(auth);
      const verificationId = await provider.verifyPhoneNumber('+16505550101', applicationVerifier);
      // Obtain the verificationCode from the user.
      const phoneCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
      const userCredential = await signInWithCredential(auth, phoneCredential);  
    } catch (e) {
      console.log('e', e);
    }*/
  };

  return (
    <Button onClick={signIn} class={styles.btn} variant="text" size="small">
      <Email class={styles.icon} />
      <span>Sign in email</span>
    </Button>
  );
};

export default PhoneLogin;
