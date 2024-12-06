import React from 'react';

import './Navbar.css'
import PropTypes from 'prop-types';

const NavItem = ({ link, title, BoxClasses, NavItemClasses }) => {
  return (
    <div className={`navbar ${BoxClasses}`}>
      <a className={`${NavItemClasses}`} href={link}>{title}</a> 
    </div>
  )
}
NavItem.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  BoxClasses: PropTypes.string.isRequired,
  NavItemClasses: PropTypes.string.isRequired,
};
export default NavItem
