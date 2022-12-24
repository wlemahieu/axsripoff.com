/**
 * All component routes
 */
import { FC, useEffect } from 'react';
import { Route, Routes as RouteSwitch, useNavigate } from 'react-router-dom';
import Home from '@views/Home';
import About from '@views/About';
import Terms from '@src/views/Terms';
import Privacy from '@src/views/Privacy';
import Cookies from '@src/views/Cookies';
import Contact from '@views/Contact';
import Start from '@src/views/Start';
import Share from '@views/Share';
import Verify from '@src/views/Verify';
import useGetFirebaseUser from '@src/hooks/useGetFirebaseUser';

const Routes: FC = () => {
  const user = useGetFirebaseUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(`/share`);
    }
  }, [user]);

  return (
    <RouteSwitch>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
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
