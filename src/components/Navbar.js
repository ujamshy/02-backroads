import logo from '../images/logo.svg';

import Navlink from './Navlink';
import Navicon from './Navicon';

import { navLinks } from '../data';
import { navIcons } from '../data';
import { useState } from 'react';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleShowLinks = () => {
    setShowLinks((shown) => !shown);
  };

  const hideLinks = (e) => {
    setShowLinks(false);
  };

  let navLinksClass = 'nav-links';
  if (showLinks) {
    navLinksClass += ' show-links';
  }

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button
            onClick={toggleShowLinks}
            type="button"
            className="nav-toggle"
            id="nav-toggle"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className={navLinksClass} id="nav-links">
          {navLinks.map((link) => {
            return (
              <Navlink
                onClick={hideLinks}
                key={link.id}
                ref={link.ref}
                title={link.title}
                className="nav-link"
              />
            );
          })}
        </ul>

        <ul className="nav-icons">
          {navIcons.map((icon) => {
            return (
              <Navicon
                key={icon.id}
                ref={icon.ref}
                iconName={icon.iconName}
                className="nav-icon"
              />
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
