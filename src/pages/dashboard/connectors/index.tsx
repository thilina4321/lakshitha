import React from "react";
import { Typography, Box } from "@mui/material";
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
      </Box>
    </DashboardLayout>
  );
};

export default Connectors;
