import React from "react";
import { Button, Box, Typography, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import DashboardLayout from "../index"; // Import the DashboardLayout
import Head from "next/head";

const Overview: React.FC = () => {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <DashboardLayout>
      <Head>
        <title>Overview</title>
      </Head>
      <div className="flex justify-center items-center w-full p-6">
        <Box
          className={`flex ${
            isMobile ? "flex-col" : "flex-row"
          } items-center justify-between w-full md:w-3/4 space-y-6 md:space-y-0`}
        >
          {/* Source Box */}
          <Box className="flex flex-col items-center space-y-4">
            <Box className="w-40 h-40 bg-gradient-to-r from-indigo-300 to-indigo-500 flex items-center justify-center rounded-lg shadow-lg">
              <Typography className="text-white font-semibold">Source</Typography>
            </Box>
            <Button
              variant="contained"
              className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white"
              onClick={() => router.push("/dashboard/overview/source")}
            >
              + Add
            </Button>
          </Box>

          {/* Modern Connector Arrow */}
          <Box className="relative flex justify-center items-center my-4 md:mx-8">
            {/* Horizontal for Desktop, Vertical for Mobile */}
            <div className={`flex ${isMobile ? "flex-col" : "flex-row"} items-center`}>
              {/* Connector Line */}
              <div
                className={`${
                  isMobile ? "w-1 h-16" : "h-1 w-16"
                } bg-gradient-to-r from-indigo-400 to-indigo-600`}
              ></div>

              {/* Arrowhead */}
              <div
                className={`border-${isMobile ? "b" : "r"}-8 border-transparent ${
                  isMobile ? "border-t-8" : "border-l-8"
                } border-indigo-600 ${isMobile ? "transform rotate-90 mt-2" : "ml-2"} w-0 h-0`}
              ></div>
            </div>
          </Box>

          {/* Destination Box */}
          <Box className="flex flex-col items-center space-y-4">
            <Box className="w-40 h-40 bg-gradient-to-r from-indigo-300 to-indigo-500 flex items-center justify-center rounded-lg shadow-lg">
              <Typography className="text-white font-semibold">Destination</Typography>
            </Box>
            <Button
              variant="contained"
              className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              + Add
            </Button>
          </Box>
        </Box>
      </div>
    </DashboardLayout>
  );
};

export default Overview;
