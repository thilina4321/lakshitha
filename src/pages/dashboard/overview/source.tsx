import React, { useState } from "react";
import { Button, Box, Typography, TextField, InputAdornment, IconButton } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import DashboardLayout from "../index"; // Import the DashboardLayout
import Head from "next/head";

const AddSource: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const availableSources = [
    {
      name: "NetSuite SuiteAnalytics",
      keyword: "netsuite",
      logo: "/netsuite-logo.png",
    },
    // Add more sources here if needed
  ];

  const filteredSource = availableSources.filter((source) =>
    source.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <DashboardLayout>
      <Head>
        <title>Source</title>
      </Head>
      <Box className="flex flex-col items-center w-full">
        {/* Search Bar */}
        <Box className="w-11/12 my-8">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search for a source..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
              style: {
                borderRadius: "0px", // No rounding for modern look
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
                padding: "1px", // Padding to give the search box some spacing
              },
            }}
            className="bg-white border-gray-300"
          />
        </Box>

        {/* Search Result */}
        {filteredSource.length > 0 && (
          <Box className="w-11/12 p-4 border border-gray-300 shadow-sm bg-white flex justify-between items-center">
            <Box className="flex items-center">
              {/* Source Icon */}
              <Box className="w-14 h-14 font-bold bg-black mr-4 flex text-white items-center justify-center">
                <p>{filteredSource[0].name.charAt(0)}</p>
              </Box>

              {/* Source Title */}
              <Typography variant="h6" className="font-semibold text-gray-900">
                {filteredSource[0].name}
              </Typography>
            </Box>

            {/* Setup Button */}
            <Button
              variant="contained"
              color="primary"
              className="px-5 py-2 shadow-md hover:shadow-lg transition-all duration-200"
            >
              Setup
            </Button>
          </Box>
        )}
      </Box>
    </DashboardLayout>
  );
};

export default AddSource;
