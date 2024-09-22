import React from "react";
import { Button, Box, Typography, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import DashboardLayout from "../index"; // Import the DashboardLayout
import Head from "next/head";

const Overview: React.FC = () => {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 768px)"); // Detect if the screen size is mobile

  return (
    <DashboardLayout>
      <Head>
        <title>Overview</title>
      </Head>
      <div className="flex justify-center items-center w-full p-4">
        {/* Adjust the layout to stack on mobile */}
        <Box
          className={`flex ${isMobile ? "flex-col" : "flex-row"} items-center justify-between w-full md:w-3/4 space-y-6 md:space-y-0`}
        >
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
          <Box className={`${isMobile ? "my-4" : ""}`}>
            <Image
              src="/connector.png"
              alt="Connector"
              width={isMobile ? 80 : 100}
              height={isMobile ? 40 : 50}
            />
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
