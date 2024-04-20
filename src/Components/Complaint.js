import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import './Complaint.css';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';

function Complaint() {
    const [searchTerm, setSearchTerm] = useState('');
    const [dropdownValue, setDropdownValue] = useState('');
    const [tableData, setTableData] = useState([
        { id: 1, complaintNo: 'C001', originated: 'Customer', dateOfOrigin: '2024-04-18', allocatedTo: 'John', category: 'Technical', department: 'IT', status: 'Pending' },
        { id: 2, complaintNo: 'C002', originated: 'Customer', dateOfOrigin: '2024-04-19', allocatedTo: 'Doe', category: 'Billing', department: 'Finance', status: 'Active' },
        { id: 3, complaintNo: 'C003', originated: 'Customer', dateOfOrigin: '2024-04-20', allocatedTo: 'Alice', category: 'Technical', department: 'IT', status: 'Completed' },
        { id: 4, complaintNo: 'C004', originated: 'Customer', dateOfOrigin: '2024-04-21', allocatedTo: 'Bob', category: 'Billing', department: 'Finance', status: 'Pending' },
        { id: 5, complaintNo: 'C005', originated: 'Customer', dateOfOrigin: '2024-04-22', allocatedTo: 'Charlie', category: 'Technical', department: 'IT', status: 'Active' },
        { id: 6, complaintNo: 'C006', originated: 'Customer', dateOfOrigin: '2024-04-23', allocatedTo: 'David', category: 'Billing', department: 'Finance', status: 'Completed' },
        { id: 7, complaintNo: 'C007', originated: 'Customer', dateOfOrigin: '2024-04-24', allocatedTo: 'Eva', category: 'Technical', department: 'IT', status: 'Pending' },
        { id: 8, complaintNo: 'C008', originated: 'Customer', dateOfOrigin: '2024-04-25', allocatedTo: 'Frank', category: 'Billing', department: 'Finance', status: 'Active' },
        { id: 9, complaintNo: 'C009', originated: 'Customer', dateOfOrigin: '2024-04-26', allocatedTo: 'Grace', category: 'Technical', department: 'IT', status: 'Completed' },
        { id: 10, complaintNo: 'C010', originated: 'Customer', dateOfOrigin: '2024-04-27', allocatedTo: 'Helen', category: 'Billing', department: 'Finance', status: 'Pending' },
    ]);
    const dummyData = [
        { name: 'Department 1', total: 56, resolved: 30, pending: 26 },
        { name: 'Department 2', total: 65, resolved: 40, pending: 25 },
        { name: 'Department 3', total: 72, resolved: 50, pending: 22 },
        { name: 'Department 4', total: 60, resolved: 35, pending: 25 },
        { name: 'Department 5', total: 80, resolved: 60, pending: 20 },
    ];

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleDropdownChange = (event) => {
        setDropdownValue(event.target.value);
    };
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const totalPages = Math.ceil(tableData.length / itemsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className='complaintPageContainer'>
            <div className="contentContainer">
                {/* Left Column */}
                <div className="leftColumn">
                    <div className="search-container">
                        <div className="input-container">
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search..."
                                style={{ backgroundColor: 'lightblue', border: 'none' }}
                                value={searchTerm}
                                onChange={handleInputChange}
                            />
                            <select className="dropdown" onChange={handleDropdownChange} value={dropdownValue}>
                                <option value="">Search by Complaint No</option>
                                <option value="10"> Complaint No 1</option>
                                <option value="20">Complaint No 2</option>
                                <option value="30">Complaint No 3</option>
                                {/* Add more options here if needed */}
                            </select>
                        </div>
                    </div>

                    <div className="cardContainer">
                        <Card className="complaintCard">
                            <CardContent className="cardContent">
                                <TextsmsOutlinedIcon className="icon" />
                                <div>
                                    <div className="complaintTitle">
                                        Active complaints
                                    </div>
                                    <div className='complaintsNo'>
                                        4989
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="complaintCard">
                            <CardContent className="cardContent">
                                <TextsmsOutlinedIcon className="icon" />
                                <div>
                                    <div className="complaintTitle">
                                        Pending Complaints
                                    </div>
                                    <div className='complaintsNo'>
                                        4989
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="complaintCard">
                            <CardContent className="cardContent">
                                <TextsmsOutlinedIcon className="icon" />
                                <div>
                                    <div className="complaintTitle">
                                        Completed complaints
                                    </div>
                                    <div className='complaintsNo'>
                                        4989
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Table */}
                    <table className="complaintTable">
                        <div className='tableheads'>
                            <thead>
                                <tr>
                                    <th>SI. No</th>
                                    <th>Complaint No</th>
                                    <th>Originated</th>
                                    <th>Date of Origin</th>
                                    <th>Allocated To</th>
                                    <th>Category</th>
                                    <th>Department</th>
                                    <th>Status</th>
                                    <th>View</th>
                                </tr>
                            </thead>
                        </div>
                        <div>
                            <tbody>

                                {currentItems.map((row) => (
                                    <tr key={row.id} className="tableRow">
                                        <td>{row.id}</td>
                                        <td>{row.complaintNo}</td>
                                        <td>{row.originated}</td>
                                        <td>{row.dateOfOrigin}</td>
                                        <td>{row.allocatedTo}</td>
                                        <td>{row.category}</td>
                                        <td>{row.department}</td>
                                        <td>{row.status}</td>
                                        <td><Button variant="contained" color="primary" size="small" onClick={() => console.log('View details clicked', row)} className='tablebutton'>Details</Button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </div>
                    </table>

                    {/* Pagination */}
                    <div className="pagination">
                        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                            <span key={pageNumber} className={`pageNumber ${pageNumber === currentPage ? 'active' : ''}`} onClick={() => handleClick(pageNumber)}>
                                {pageNumber}
                            </span>
                        ))}
                    </div>
                </div>
                {/* Right Column */}
                <div className="rightColumn">
                    {/* complaint Cards Department-wise */}
                    <Card className='departmentdetails'>
                        <h3 className="departmentTitle">Pending Report</h3>

                        <div className="departmentContainer">
                            {dummyData.map((department, index) => (
                                <Card key={index} className="complaintDepartmentCard">
                                    <CardContent className="cardContentright">
                                        <Typography variant="h6" component="div" className="departmentName">
                                            {department.name}
                                        </Typography>
                                        <div className="complaintDetails">
                                            <span className="detailLabelheads">Total Number of complaints</span>
                                            <span className="detailValueheads">{department.total}</span>
                                        </div>
                                        <div className="complaintDetails">
                                            <span style={{ backgroundColor: 'grey', width: '8px', height: '8px', display: 'inline-block', marginRight: '5px', alignSelf: 'center' }}></span>
                                            <span className="detailLabel">Complaints arrived</span>
                                            <span className="detailValue">{department.total}</span>
                                        </div>
                                        <div className="complaintDetails">
                                            <span style={{ backgroundColor: 'green', width: '8px', height: '8px', display: 'inline-block', marginRight: '5px', alignSelf: 'center' }}></span>
                                            <span className="detailLabel">Complaints resolved</span>
                                            <span className="detailValue">{department.resolved}</span>
                                        </div>
                                        <div className="complaintDetails">
                                            <span style={{ backgroundColor: 'red', width: '8px', height: '8px', display: 'inline-block', marginRight: '5px', alignSelf: 'center' }}></span>
                                            <span className="detailLabel">Complaints pending</span>
                                            <span className="detailValue">{department.pending}</span>
                                        </div>
                                        <div className="progressBarContainer">
                                            <div>
                                                <div className="progress" style={{ width: '100%', backgroundColor: '#e0e0e0', height: '10px', borderRadius: '5px',flex: '70%'  }}>
                                                    <div className="progressBarFill" style={{ width: '10%', backgroundColor: 'green', height: '100%', borderRadius: '5px' }}></div>
                                                </div>
                                                <div className="progressText">
                                                    10% higher than last month
                                                </div>
                                            </div>
                                            <div className="detailsButton">
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    size="small"
                                                    onClick={() => console.log('Details clicked', department)}
                                                    className='tablebutton'>
                                                    Details
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </Card>

                </div>
            </div>
        </div>
    );
}

export default Complaint;
