import React from "react";
import { NavLink, } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { Menu, } from "semantic-ui-react";
import { AccountContext } from "../providers/AccountProvider";

const Navbar = () => {
  const { username } = useContext(AccountContext);
  return (
    <Menu>
      <NavLink to="/">
        <Menu.Item>
          Home
        </Menu.Item>
      </NavLink>
      <NavLink to="/account/profile">
        <Menu.Item>
          {/* Will be replaced with the actual username */}
          {username}
        </Menu.Item>
      </NavLink>
    </Menu> 
  )
}

export default Navbar;