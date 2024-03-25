import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}
      >
        <span className="menu-line"></span>
        <span className="menu-line"></span>
        <span className="menu-line"></span>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}><Link className="nav-bar-links" to="/About">About</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link className="nav-bar-links" to="/Projects">Projects</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link className="nav-bar-links" to="/Contact">Contact</Link></MenuItem>
      </Menu>
    </div>
  );
}