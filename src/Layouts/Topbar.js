import React from 'react';
import './Topbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';

const TopBar = () => {
    return (
        <div className="TopBarContainer">
            <div className="TopBarLeft">
                LOGO
            </div>
            <div className="TopBarCenter">
                <div className="SearchContainer">
                    <input type="text" placeholder="Search here" />
                    <button>
                        <FontAwesomeIcon icon={faSearch} className="searchicons" />
                        Search
                    </button>
                </div>
            </div>
            <div className="TopBarRight">
                <NotificationsNoneOutlinedIcon className="icon" />
                <TextsmsOutlinedIcon className="icon" />

            </div>
        </div>
    );
};

export default TopBar;
