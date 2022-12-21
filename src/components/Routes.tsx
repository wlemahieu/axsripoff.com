/**
 * All component routes
 */
import { FC } from 'react';
import { Route, Routes as RouteSwitch } from 'react-router-dom';
import Home from '@views/Home';
import About from '@views/About';
import Terms from '@src/views/Terms';
import Privacy from '@src/views/Privacy';
import Cookies from '@src/views/Cookies';
import Contact from '@views/Contact';
import Login from '@views/Login';

const Routes: FC = () => {
  return (
    <RouteSwitch>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/cookies" element={<Cookies />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
    </RouteSwitch>
  );
};

export default Routes;
