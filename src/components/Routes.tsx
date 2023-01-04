/**
 * All component routes
 */
import { FC } from 'react';
import { Route, Routes as RouteSwitch } from 'react-router-dom';
import Complaints from '@src/views/Complaints';
import About from '@views/About';
import Terms from '@src/views/Terms';
import Privacy from '@src/views/Privacy';
import Cookies from '@src/views/Cookies';
import Contact from '@views/Contact';
import Start from '@src/views/Start';
import Share from '@views/Share';
import Verify from '@src/views/Verify';
import Problems from '@src/views/Problems';
import Tweets from '@src/views/Tweets';
import useGetFirebaseUser from '@src/hooks/useGetFirebaseUser';

const Routes: FC = () => {
  const user = useGetFirebaseUser();

  return (
    <RouteSwitch>
      <Route path="/" element={<Tweets />} />
      <Route path="/complaints" element={<Complaints />} />
      <Route path="/about" element={<About />} />
      <Route path="/problems" element={<Problems />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/cookies" element={<Cookies />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/verify" element={<Verify />} />
      {!user ? <Route path="/start" element={<Start />} /> : null}
      {user ? <Route path="/share" element={<Share />} /> : null}
    </RouteSwitch>
  );
};

export default Routes;
