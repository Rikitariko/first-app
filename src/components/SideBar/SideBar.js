import React from "react";
import "./side-bar.scss";
import {observer} from 'mobx-react';
import mainStore from '../../stores/main-store';
import ProjectLogo from './../../img/icon.svg';
import RoomLogo from './../../img/record.svg';
let classNames = require('classnames');

const ProjectRoom = (props) => {
    let roomClassName = 'project-room';
    if (props.active === true)
        roomClassName += ' active';
    return (
        <div className={roomClassName}>
            <div className="room-icon"><img src={RoomLogo} alt="Project Logo" /></div>
            <div><span>Комната 1</span></div>
        </div>
    );
};

const ProjectTab = (props) => {
    let tabClassName = 'project-tab';
    let projectClassName = 'project-name';
    if (props.active === true) {
        projectClassName += ' active';
        tabClassName += ' active';
    }

    if (props.active === true)
        return (
            <div className={tabClassName} onClick={() => { mainStore.toggleActiveProject(props.id) }}>
                <div className={projectClassName}>
                    <div className="project-icon"><img src={ProjectLogo} alt="Project Logo" /></div>
                    <div><span>Проект</span></div>
                </div>
                <ProjectRoom />
                <ProjectRoom active={true}/>
            </div>
        );
    else
        return (
            <div className="project-tab" onClick={() => { mainStore.toggleActiveProject(props.id) }}>
                <div className={projectClassName}>
                    <div className="project-icon"><img src={ProjectLogo} alt="Project Logo" /></div>
                    <div><span>Проект</span></div>
                </div>
            </div>
        );
};

export const SideBar = observer(() => {
    let sideBarClass = classNames({
        'side-bar': true,
        'active': mainStore.active,
    });

    return (
        <div className={sideBarClass}>
            <ProjectTab active={(mainStore.activeProject === 1)} id={1}/>
            <ProjectTab active={(mainStore.activeProject === 2)} id={2}/>
            <ProjectTab active={(mainStore.activeProject === 3)} id={3}/>
        </div>
    );
});