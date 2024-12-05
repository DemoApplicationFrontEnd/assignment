import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Box, Grid, Typography, Paper, Card, CardContent } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const Dashboard = () => {
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Projections",
        backgroundColor: "#42A5F5",
        data: [10, 20, 30, 40, 50, 60],
      },
      {
        label: "Actuals",
        backgroundColor: "#66BB6A",
        data: [12, 18, 33, 45, 52, 58],
      },
    ],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Current Week",
        borderColor: "#FF6384",
        fill: false,
        data: [22, 44, 67, 43, 76, 85],
      },
      {
        label: "Previous Week",
        borderColor: "#36A2EB",
        fill: false,
        data: [30, 40, 55, 65, 70, 80],
      },
    ],
  };

  const pieData = {
    labels: ["New York", "San Francisco", "Singapore", "London"],
    datasets: [
      {
        data: [300, 500, 100, 400],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
      },
    ],
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {["Customers", "Orders", "Revenue", "Growth"].map((label, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{label}</Typography>
                <Typography variant="h4" color="primary">
                  {Math.floor(Math.random() * 5000)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

        <Grid item xs={12} md={6}>
          <Paper>
            <Typography variant="h6" gutterBottom padding={2}>
              Projections vs Actuals
            </Typography>
            <Bar data={barData} />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper>
            <Typography variant="h6" gutterBottom padding={2}>
              Revenue Trend
            </Typography>
            <Line data={lineData} />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper>
            <Typography variant="h6" gutterBottom padding={2}>
              Total Sales Breakdown by Location
            </Typography>
            <Pie data={pieData} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
