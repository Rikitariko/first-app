import React from "react";
import ReactDOM from "react-dom";
import {Header} from "./components/Header/header";
import {SideBar} from "./components/SideBar/SideBar";
import {Main} from "./components/Main/main";
import "./index.scss";

import {observer} from 'mobx-react';
import mainStore from '../src/stores/main-store';
let classNames = require('classnames');

const Root = observer(() => {
    let mainClass = classNames({
        'main': true,
        'active': mainStore.active,
    });

    return (
        <div className="root">
            <div className={mainClass}>
                <Header />
                <Main />
            </div>
            <SideBar />
        </div>
    );
});

ReactDOM.render(<Root/>, document.getElementById("root"));