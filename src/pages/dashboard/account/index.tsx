import React from "react";
import { Typography, Box } from "@mui/material";
import DashboardLayout from "../index"; // Import the DashboardLayout
import Head from "next/head";

const Account: React.FC = () => {
  return (
    <DashboardLayout>
      <Head>
        <title>Account</title>
      </Head>
      <Box className="flex flex-col w-full items-start">
        <Typography variant="h4" className="mb-4">
          Account
        </Typography>
      </Box>
    </DashboardLayout>
  );
};

export default Account;
