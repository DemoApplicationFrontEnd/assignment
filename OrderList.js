import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  IconButton,
  Tooltip,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import "./OrderList.css";

const dummyData = [
  {
    id: "#CM9851",
    name: "Natalie Craig",
    project: "Landing Page",
    address: "Meadow Lane, Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9028",
    name: "Kate Morrison",
    project: "CRM Admin Pages",
    address: "Larry, San Francisco",
    date: "A minute ago",
    status: "Completed",
  },
  {
    id: "#CM8453",
    name: "Drew Cano",
    project: "Client Project",
    address: "Bagwell Ave, Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM4956",
    name: "Orlando Diggs",
    project: "Admin Dashboard",
    address: "Washburn, Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
];

const OrdersList = () => {
  const [selected, setSelected] = useState([]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      setSelected(dummyData.map((n) => n.id));
    } else {
      setSelected([]);
    }
  };

  const handleClick = (id) => {
    setSelected((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <div className="orders-list-container">
      <div className="orders-header">
        <h2>Order List</h2>
        <Tooltip title="Filter options">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      </div>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={
                    selected.length > 0 && selected.length < dummyData.length
                  }
                  checked={selected.length === dummyData.length}
                  onChange={handleSelectAllClick}
                />
              </TableCell>
              <TableCell>Order ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Project</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyData.map((row) => (
              <TableRow key={row.id}>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selected.includes(row.id)}
                    onChange={() => handleClick(row.id)}
                  />
                </TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.project}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell className={row.status.toLowerCase()}>
                  {row.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OrdersList;
