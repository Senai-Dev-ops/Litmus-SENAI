import "./style.css";
import LgSenai from "../../assets/images/senai.png";
import Dscr from "../../assets/images/descri.png";

const Navbar = () => {
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
            <div className="username">Guilherme</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
