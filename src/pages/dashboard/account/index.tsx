import React from "react";
import { Typography, Box, Button } from "@mui/material";
import DashboardLayout from "../index"; // Import the DashboardLayout
import Head from "next/head";

const Account: React.FC = () => {
  return (
    <DashboardLayout>
      <Head>
        <title>Accounts</title>
      </Head>
      <Box className="flex flex-col w-full items-start">
        <Typography variant="h4" className="mb-4">
          Account Settings
        </Typography>
        <Typography variant="body1" className="mb-4">
          Update your account information and preferences here.
        </Typography>

        <Button variant="contained" color="primary" className="mb-4">
          Edit Profile
        </Button>

        {/* Account Info - Example placeholder */}
        <Box className="w-full p-4 border border-gray-300 rounded-lg">
          <Typography variant="h6">User Info</Typography>
          <Typography>Email: user@example.com</Typography>
          <Typography>Subscription: Premium</Typography>
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default Account;
