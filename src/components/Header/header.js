import React from "react";
import ReactDOM from "react-dom";
import logo from '../../img/logo.png';
import loginIcon from '../../img/loginIcon.png';

import mainStore from '../../stores/main-store';
import "./header.scss";

const AppLogo = () => {
    return (
        <div className="logo">
            <img className="logo-img" src={logo} alt="logo" />
        </div>
    );
};

const LoginIcon = () => {
    return (
        <div className="login-box">
            <img className="login-icon" src={loginIcon} alt="login" />
        </div>
    );
};

const SideBarIcon = () => {
    return (
        <div className="side-bar-icon-box" onClick={() => { mainStore.toggleRightPanel() }}>
            <div className="side-bar-icon"></div>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="header">
            <AppLogo />
            <div className="header-right">
                <LoginIcon />
                <SideBarIcon />
            </div>
        </div>
    );
};