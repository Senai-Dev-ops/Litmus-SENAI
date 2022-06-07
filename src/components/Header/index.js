import React, { useState, useEffect }  from "react";
import LgSenai from "../../assets/images/senai.png";
import Dscr from "../../assets/images/descri.png";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from "@material-ui/icons/Settings";
import InsightsIcon from "@mui/icons-material/Insights";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { IconButton } from "@mui/material";
import "./style.css";
import MenuMobile from "../MenuMobile";
import PdfGenerator from "../PdfGenerator";
import Service from "../../services";

const srv = new Service();

const Header = ({ titleHeader, userName }) => {
  const username = userName || "James Ferreira";
  const Navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const userAdmin = localStorage.getItem("adm") == 1 ? true : false;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    localStorage.clear();
    Navigate("/");
  };


  const [rotationList, setRotationList] = useState([]);
  const [velocityList, setVelocityList] = useState([]);
  const [temperatureList, setTemperatureList] = useState([]);

  const [rotation, setRotation] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [temperature, setTemperature] = useState(0);


  function getData() {
    
    srv.machineList().then((res) => {
     console.log(res)
     for (var i in res.infos) {
        setRotationList((arr) => [...arr, res.infos[i].rotacao]);
        setVelocityList((arr) => [...arr, res.infos[i].avanco]);
        setTemperatureList((arr) => [...arr, res.infos[i].temperatura]);
     }
   //  var sumRotation = rotationList.reduce((sum, i) => sum + i);
   //  var sumVelocity = velocityList.reduce((sum, i) => sum + i);
   //  var sumTemperature = temperatureList.reduce((sum, i) => sum + i);

   //  setRotation(Math.round(sumRotation / rotationList.length));
   //  setVelocity(Math.round(sumVelocity / rotationList.length));
   //  setTemperature(Math.round(sumTemperature / rotationList.length));

   //  console.log(rotation, velocity, temperature);
    });
   
   var sumRotation = rotationList.reduce((sum, i) => sum + i);
   var sumVelocity = velocityList.reduce((sum, i) => sum + i);
   var sumTemperature = temperatureList.reduce((sum, i) => sum + i);

   setRotation(Math.round(sumRotation / rotationList.length));
   setVelocity(Math.round(sumVelocity / rotationList.length));
   setTemperature(Math.round(sumTemperature / rotationList.length));

   console.log(rotation, velocity, temperature);
  }

  useEffect(() => {
    srv.machineList().then((res) => {
      console.log(res)
      for (var i in res.infos) {
         setRotationList((arr) => [...arr, res.infos[i].rotacao]);
         setVelocityList((arr) => [...arr, res.infos[i].avanco]);
         setTemperatureList((arr) => [...arr, res.infos[i].temperatura]);
      }
    });
  }, []);

	console.log(rotationList)

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
                  <div>
                    <MenuItem
                      onClick={() => {
                        Navigate("/admin");
                      }}
                    >
                      <div className="items-menu-header">
                        <SettingsIcon style={{ marginRight: 8 }} />
                        <p>Gerenciar Usuários</p>
                      </div>
                    </MenuItem>

                    <MenuItem onClike={() => getData()}>
                      <div className="items-menu-header">
                        <PictureAsPdfIcon style={{ marginRight: 8 }} />
			{/*  <PdfGenerator /> */}

                      </div>
                    </MenuItem>
                  </div>
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
                <MenuItem onClick={logout}>
                  <div className="items-menu-header">
                    <ExitToAppIcon style={{ marginRight: "8px" }} />
                    <p>Sair</p>
                  </div>
                </MenuItem>
              </Menu>
            </div>
          </div>

          <div className="menu-mobile">
            <MenuMobile
              pageName={titleHeader}
              user={username}
              typeUser={userAdmin}
              logoutFunc={logout}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
