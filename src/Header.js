import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch } from "react-redux";
import { auth } from './firebase';
import { logout } from "./features/userSlice";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    };

    return (
        <div className="header">

            <div className="header_left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />

                <div className="header_search">
                    <SearchIcon />
                    <input placeholder = "Search" type="text" />
                </div>

            </div>

            <div className="header_right">

                <HeaderOption Icon = {HomeIcon} title = "Home" />
                <HeaderOption Icon ={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon ={BusinessCenterIcon} title="JObs" />
                <HeaderOption Icon ={ChatIcon} title="Messaging" />
                <HeaderOption Icon ={NotificationsIcon} title="Notifications" />
                <HeaderOption 
                    /*avatar = {user.photoUrl}*//*"https://i.pinimg.com/originals/b8/78/55/b87855f5526cc82d5e5c90cf6e3e0209.jpg"*/
                    avatar = {true}
                    title = "Me"
                    onClick = {logoutOfApp}
                />
            </div>        
        </div>
    );
}

export default Header;
