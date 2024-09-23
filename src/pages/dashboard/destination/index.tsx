import React from "react";
import { Typography, Box } from "@mui/material";
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
      </Box>
    </DashboardLayout>
  );
};

export default Destination;
