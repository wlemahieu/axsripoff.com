/**
 * Phone login button
 */
import { Component } from 'solid-js';
import styles from '@views/Login.module.css';
import { getAuth, RecaptchaVerifier, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { useFirebaseApp } from 'solid-firebase';
import Button from '@suid/material/Button';
import Phone from '@suid/icons-material/Phone';

const PhoneLogin: Component = () => {
  const app = useFirebaseApp();
  const auth = getAuth(app);
  const signIn = async () => {
    /*
    try {
      const applicationVerifier = new RecaptchaVerifier('recaptcha-container');
      const provider = new PhoneAuthProvider(auth);
      const verificationId = await provider.verifyPhoneNumber('+16505550101', applicationVerifier);
      // Obtain the verificationCode from the user.
      const phoneCredential = PhoneAuthProvider.credential(verificationId, 1234);
      const userCredential = await signInWithCredential(auth, phoneCredential);
      console.log('userCredential', userCredential);
    } catch (e) {
      console.log('e', e);
    }*/
  };

  return (
    <Button onClick={signIn} class={styles.btn} variant="text" size="small" disabled>
      <Phone class={styles.icon} />
      <span>Sign in phone</span>
    </Button>
  );
};

export default PhoneLogin;
