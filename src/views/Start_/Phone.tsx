/**
 * Phone login button
 */
import styles from '@views/Login.module.css';
import { FC } from 'react';
// import { getAuth, RecaptchaVerifier, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
// import useGetFirebaseAuth from '@src/hooks/useGetFirebaseAuth';
import Button from '@mui/material/Button';
import Phone from '@mui/icons-material/Phone';

const PhoneLogin: FC = () => {
  // const auth = useGetFirebaseAuth();
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
    <Button
      onClick={signIn}
      className={styles.btn}
      variant="text"
      size="small"
      disabled
      style={{ backgroundColor: 'lightgrey' }}
    >
      <Phone className={styles.icon} />
      <span>Sign in phone</span>
    </Button>
  );
};

export default PhoneLogin;
