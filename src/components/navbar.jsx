import * as React from 'react';
import Box from '@mui/material/Box';
import {Link} from "react-router-dom"
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export default function Navbar() {
  return (
    <Box className="navbar" container columns={2}>
      <Box className="links">
        <Link id="Name" to="/"> EVO Store </Link>
        <Link to="/cart">
          <ShoppingCart size={35} />
        </Link>
      </Box> 
    </Box>
  );
}

