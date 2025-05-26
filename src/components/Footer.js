import Navlink from './Navlink';
import Navicon from './Navicon';

import { navLinks } from '../data';
import { navIcons } from '../data';

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links" id="footer-links">
        {navLinks.map((link) => {
          return (
            <Navlink
              key={link.id}
              ref={link.ref}
              title={link.title}
              className="footer-link"
            />
          );
        })}
      </ul>
      <ul className="footer-icons">
        {navIcons.map((icon) => {
          return (
            <Navicon
              key={icon.id}
              ref={icon.ref}
              iconName={icon.iconName}
              className="footer-icon"
            />
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
