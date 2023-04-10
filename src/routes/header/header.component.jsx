import { Fragment } from "react";
import CallIcon from "@mui/icons-material/Call";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

import { Outlet, Link } from "react-router-dom";

import mainLogo from "../../assets/images/Group 3.png";

import "./header.styles.scss";

const Header = () => {
  return (
    <Fragment>
      <div className="topBar">
        <div className="content">
          <div className="left">
            <h5>Welcome to Our Store Hiscraves</h5>
          </div>
          <div className="right">
            <div className="icon">
              <CallIcon fontSize="small" />
            </div>
            <div>
              <h5>
                Call Us:
                <Link href="tel:123456789" target="_blank" rel="noreferrer" to="#">
                  +12 1234 567 89
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="header">
        <div className="headerInner">
          <div className="menu">
            <div>
              <img src={mainLogo} alt="fireSpot" />
            </div>
          </div>
          <div className="logo">
            <Link to="/">
              <h4>Logo Here</h4>
            </Link>
          </div>
          <div className="navigation">
            <div className="iconn">
              <SearchIcon />
            </div>
            <div className="iconn">
              <FavoriteBorderIcon />
            </div>
            <div className="iconn">
              <LocalMallIcon />
            </div>
            <div className="iconn">
              <PermIdentityIcon />
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Header;
