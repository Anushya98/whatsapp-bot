import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import './Sidebar.css';

const SideBar = () => {
    const navigate = useNavigate();
    const [activeOption, setActiveOption] = useState(null);

    const handleOptionClick = (option) => {
        setActiveOption(option);
    };

    const handleFeedbackClick = () => {
        setActiveOption('Feedback');
        navigate('/feedback');
    };

    const handleComplaintClick = () => {
        setActiveOption('Compliance');
        navigate('/complaint');
    };

    return (
        <div className='SideBarContainer'>
            <div className='profileContainer'>
                <div className='profilePicture'>
                    {/* Placeholder for profile picture */}
                </div>
                <div className='welcomeMessage'>
                    Welcome back!
                </div>
                <div className='userName'>
                    User Name
                </div>
            </div>
            <div className='sidebarOptions'>
                <div className={`sidebarOption ${activeOption === 'Dashboard' ? 'active' : ''}`} onClick={() => handleOptionClick('Dashboard')}>
                    <HomeOutlinedIcon className='sidebarOptionIcon' />
                    <div className="sidebarOptionText">Dashboard</div>
                </div>
                <div className={`sidebarOption ${activeOption === 'Sales' ? 'active' : ''}`} onClick={() => handleOptionClick('Sales')}>
                    <ShoppingCartCheckoutOutlinedIcon className='sidebarOptionIcon' />
                    <div className="sidebarOptionText">Sales</div>
                </div>
                <div className={`sidebarOption ${activeOption === 'Tutorial' ? 'active' : ''}`} onClick={() => handleOptionClick('Tutorial')}>
                    <BookOutlinedIcon className='sidebarOptionIcon' />
                    <div className="sidebarOptionText">Tutorial</div>
                </div>
                <div className={`sidebarOption ${activeOption === 'Compliance' ? 'active' : ''}`} onClick={() => handleComplaintClick('Compliance')}>
                    <AssignmentTurnedInOutlinedIcon className='sidebarOptionIcon' />
                    <div className="sidebarOptionText">Compliance</div>
                </div>
                <div className={`sidebarOption ${activeOption === 'Your Report' ? 'active' : ''}`} onClick={() => handleOptionClick('Your Report')}>
                    <SummarizeOutlinedIcon className='sidebarOptionIcon' />
                    <div className="sidebarOptionText">Your Report</div>
                </div>
                <div className={`sidebarOption ${activeOption === 'Feedback' ? 'active' : ''}`} onClick={handleFeedbackClick}>
                    <InsertCommentOutlinedIcon className='sidebarOptionIcon' />
                    <div className="sidebarOptionText">Feedback</div>
                </div>
                <div className={`sidebarOption ${activeOption === 'Awards' ? 'active' : ''}`} onClick={() => handleOptionClick('Awards')}>
                    <MilitaryTechOutlinedIcon className='sidebarOptionIcon' />
                    <div className="sidebarOptionText">Awards</div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
