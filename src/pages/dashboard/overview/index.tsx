import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import DashboardLayout from "../index"; // Import the DashboardLayout
import Head from "next/head";

const Overview: React.FC = () => {
  const router = useRouter();

  return (
    <DashboardLayout>
      <Head>
        <title>Overview</title>
      </Head>
      <div className="flex justify-center items-center w-full">
        <Box className="flex items-center justify-between w-3/4">
          {/* Source Box */}
          <Box className="flex flex-col items-center space-y-2">
            <Box className="w-32 h-32 bg-gray-300 flex items-center justify-center rounded-lg shadow-sm">
              <Typography>Source</Typography>
            </Box>
            {/* Clicking this button should navigate to /dashboard/overview/source */}
            <Button
              variant="contained"
              className="mt-2 bg-indigo-500 text-white"
              onClick={() => router.push("/dashboard/overview/source")}
            >
              + Add
            </Button>
          </Box>

          {/* Connector Image */}
          <Box>
            <Image src="/connector.png" alt="Connector" width={100} height={50} />
          </Box>

          {/* Destination Box */}
          <Box className="flex flex-col items-center space-y-2">
            <Box className="w-32 h-32 bg-gray-300 flex items-center justify-center rounded-lg shadow-sm">
              <Typography>Destination</Typography>
            </Box>
            <Button variant="contained" className="mt-2 bg-indigo-500 text-white">
              + Add
            </Button>
          </Box>
        </Box>
      </div>
    </DashboardLayout>
  );
};

export default Overview;
