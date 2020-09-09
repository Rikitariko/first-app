import React from "react";
import "./main.scss";
import logo from '../../img/loginIcon.png';
import mainStore from "../../stores/main-store";
import {observer} from "mobx-react";

const Button = observer((props) => {
    if (props.active === true)
        return (<div className="main-button active" onClick={() => {mainStore.changeSection(props.id)}}> <div><span>{props.text}</span></div> </div>);
    else
        return (<div className="main-button" onClick={() => {mainStore.changeSection(props.id)}}> <div><span>{props.text}</span></div> </div>);
});

const MainButtons = observer(() => {
    return (
        <div className="main-buttons">
            <Button text="Характеристики" active={(mainStore.activeSection === 1)} id={1}/>
            <Button text="Эскизы" active={(mainStore.activeSection === 2)} id={2}/>
            <Button text="Материалы" active={(mainStore.activeSection === 3)} id={3}/>
            <Button text="Мебель и свет" active={(mainStore.activeSection === 4)} id={4}/>
        </div>
    );
});

const PhotoItem = () => {
    return (
        <div className="list-item">
            <img className="list-img" src={logo} alt="logo" />
        </div>
    );
};

const ListOfPhoto = () => {
    return (
        <div className="list-body">
            <PhotoItem />
            <PhotoItem />
            <PhotoItem />
            <PhotoItem />
            <PhotoItem />
            <PhotoItem />
        </div>
    );
};

const ActionButton = () => {
    return (
        <div className="action-button">
            <span>Добавить</span>
        </div>
    );
};

const MainBody = () => {
    return (
        <div className="main-body">
            <ListOfPhoto/>
            <div style={{display: "flex", flexDirection: "row-reverse"}}><ActionButton/></div>
        </div>
    );
};

export const Main = () => {
    return (
        <div className="main-box">
            <MainButtons />
            <MainBody />
        </div>
    );
};