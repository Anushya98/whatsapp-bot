import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import GroupIcon from '@mui/icons-material/Group';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './Sales.css'; // Import your custom styles for Sales page

function Sales() {
    return (
        <div className="salesContainer">
            {/* Top Cards */}
            <div className="topCardsContainer">
                <Card className="salesCard">
                    <CardContent style={{padding:"0 16px 16px 16px"}}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className="iconContainer"><PersonAddIcon /></div>
                            <Typography variant="h6" className='SalesTop'>New Employee</Typography>
                        </div>
                        <div className="percentageRow">
                            <div className="percentage">25%</div>
                            <div className="changeContainer greenBackground"><KeyboardArrowUpIcon />0.05%</div>
                        </div>
                        <div className='cardFooter green'> <span>10% </span>increase of Total distance covered</div>
                    </CardContent>
                </Card>
                <Card className="salesCard">
                <CardContent style={{padding:"0 16px 16px 16px"}}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className="iconContainer"><EventAvailableIcon /></div>
                            <Typography variant="h6" className='SalesTop'>Employee Attendance</Typography>
                        </div>
                        <div className="percentageRow">
                            <div className="percentage">68%</div>
                            <div className="changeContainer redBackground"><KeyboardArrowDownIcon />0.02%</div>
                        </div>
                        <div className='cardFooter red'> <span>10% </span>decrease of Total distance covered</div>
                    </CardContent>
                </Card>
                <Card className="salesCard">
                <CardContent style={{padding:"0 16px 16px 16px"}}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className="iconContainer"><DirectionsRunIcon /></div>
                            <Typography variant="h6" className='SalesTop'>Distance Covered</Typography>
                        </div>
                        <div className="percentageRow">
                            <div className="percentage">95%</div>
                            <div className="changeContainer greenBackground"><KeyboardArrowUpIcon />0.10%</div>

                        </div>
                        <div className='cardFooter green'> <span>10% </span>increase of Total distance covered</div>
                    </CardContent>
                </Card>
                <Card className="salesCard">
                <CardContent style={{padding:"0 16px 16px 16px"}}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className="iconContainer"><GroupIcon /></div>
                            <Typography variant="h6" className='SalesTop'>Active Leads</Typography>
                        </div>
                        <div className="percentageRow">
                            <div className="percentage">28%</div>
                            <div className="changeContainer redBackground"><KeyboardArrowDownIcon />0.05%</div>
                        </div>
                        <div className='cardFooter red'> <span>10% </span>decrease of Total distance covered</div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default Sales;
