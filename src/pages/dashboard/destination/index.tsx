import React from "react";
import { Typography, Box, Button } from "@mui/material";
import DashboardLayout from "../index"; // Import the DashboardLayout
import Head from "next/head";

const Destination: React.FC = () => {
  return (
    <DashboardLayout>
      <Head>
        <title>Destination</title>
      </Head>
      <Box className="flex flex-col w-full items-start">
        <Typography variant="h4" className="mb-4">
          Destination
        </Typography>
        <Typography variant="body1" className="mb-4">
          Manage the destination systems where your data is sent. Configure endpoints and other
          settings for data destinations.
        </Typography>

        <Button variant="contained" color="primary" className="mb-4">
          + Add Destination
        </Button>

        {/* Destination List - Example placeholder */}
        <Box className="w-full p-4 border border-gray-300 rounded-lg flex justify-between items-center">
          <Typography>Sample Destination</Typography>
          <Button variant="contained" color="primary">
            Setup
          </Button>
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default Destination;
