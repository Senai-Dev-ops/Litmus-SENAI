import React from "react";
import LgSenai from "../../assets/images/senai.png";
import Dscr from "../../assets/images/descri.png";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from "@material-ui/icons/Settings";
import InsightsIcon from "@mui/icons-material/Insights";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./style.css";
import MenuMobile from "../MenuMobile";

const Header = ({ titleHeader }) => {
  const username = "James Ferreira";
  const Navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const userAdmin = true;

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
            <img
              className="lg-senai"
              src={LgSenai}
              alt="logo senai"
              onClick={() => {
                Navigate("/dashboard");
              }}
            />
            <img className="descript-logo" src={Dscr} alt="descrição senai" />
          </div>

          <h1 className="page">{titleHeader}</h1>

          <div className="menu">
            <div className="options-menu">
              <h4 className="username" onClick={handleClick}>
                {username}
              </h4>
              <IconButton onClick={handleClick}>
                <ExpandMoreIcon color="action" />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {userAdmin && (
                  <MenuItem
                    onClick={() => {
                      Navigate("/admin");
                    }}
                  >
                    <div className="items-menu-header">
                      <SettingsIcon style={{ marginRight: "8px" }} />
                      <p>Gerenciar Usuários</p>
                    </div>
                  </MenuItem>
                )}

                <MenuItem
                  onClick={() => {
                    Navigate("/dashboard");
                  }}
                >
                  <div className="items-menu-header">
                    <InsightsIcon style={{ marginRight: "8px" }} />
                    <p>Dashboard</p>
                  </div>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    Navigate("/");
                  }}
                >
                  <div className="items-menu-header">
                    <ExitToAppIcon style={{ marginRight: "8px" }} />
                    <p>Logout</p>
                  </div>
                </MenuItem>
              </Menu>
            </div>
          </div>

          <div className="menu-mobile">
            <MenuMobile />
            <IconButton>
              <MenuIcon sx={{ fontSize: 40 }} />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
