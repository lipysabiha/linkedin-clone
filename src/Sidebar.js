import React from "react";
import { Avatar } from "@material-ui/core";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import "./Sidebar.css";

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className = "sidebar">
            <div className="sidebar_top">
                <img src= "https://images.unsplash.com/photo-1557683311-eac922347aa1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1015&q=80" alt="" />
                <Avatar src = {user.photoUrl} className = "sidebar_avatar">
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar_starts">
                <div className="sidebar_start">
                    <p>Who viewed you</p>
                    <p className="sidebar_startNumber">2,543</p>
                </div>
                <div className="sidebar_start">
                <p>Views on post</p>
                    <p className="sidebar_startNumber">2,543</p>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
    );
}

export default Sidebar;
