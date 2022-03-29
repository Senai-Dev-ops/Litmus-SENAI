import React from "react";
import "./style.css";
import LgSenai from "../../assets/images/senai.png";
import Dscr from "../../assets/images/descri.png";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import { useNavigate } from "react-router-dom";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const Navbar = () => {
  const Navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  
  
    
  return (
    <>
      <div className="container-space">
        <div className="top">
          <div className="logo">
            <img className="lg-senai" src={LgSenai} alt=""></img>
            <img className="descript-logo" src={Dscr} alt=""></img>
          </div>

          <div className="page">DASHBOARD</div>

          <div className="user">
            <div className="username">
              userName
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <ExpandMoreIcon color="primary" />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={()=>{Navigate('/admin')}}><SettingsIcon/> Gerenciar Usuários</MenuItem>
                <MenuItem onClick={()=>{Navigate('/')}}><ExitToAppIcon/> Logout</MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
