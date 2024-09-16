import React from "react";
import { Typography, Box, Button } from "@mui/material";
import DashboardLayout from "../index"; // Import the DashboardLayout
import Head from "next/head";

const Connectors: React.FC = () => {
  return (
    <DashboardLayout>
      <Head>
        <title>Connectors</title>
      </Head>
      <Box className="flex flex-col w-full items-start">
        <Typography variant="h4" className="mb-4">
          Connectors
        </Typography>
        <Typography variant="body1" className="mb-4">
          Manage your connectors here. This section allows you to set up and manage data connections
          between your system and external services.
        </Typography>

        <Button variant="contained" color="primary" className="mb-4">
          + Add Connector
        </Button>

        {/* Connector List - Example placeholder */}
        <Box className="w-full p-4 border border-gray-300 rounded-lg flex justify-between items-center">
          <Typography>Sample Connector</Typography>
          <Button variant="contained" color="primary">
            Setup
          </Button>
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default Connectors;
