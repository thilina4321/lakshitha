import React, { useState } from "react";
import {
  Typography,
  Box,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BigQueryIcon from "@mui/icons-material/CloudQueue"; // Example icon for BigQuery
import Head from "next/head";
import { useRouter } from "next/router";
import DashboardLayout from "..";

const connectors = [
  { name: "BigQuery", icon: <BigQueryIcon />, description: "A data warehouse by Google" },
  // Add more connectors here
];

const Destination: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const filteredConnectors = connectors.filter((connector) =>
    connector.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSelect = () => {
    router.push(`/dashboard/destination/configure`);
  };

  return (
    <DashboardLayout>
      <Head>
        <title>Destination</title>
      </Head>
      <Box className="flex flex-col w-full items-start gap-4">
        <Typography variant="h4" className="flex-1">
          Destination
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => router.push("/dashboard/destination/view")}
        >
          View Destination
        </Button>

        <Box width="100%" mb={4}>
          {/* Search bar */}
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search Connectors"
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
            }}
          />
        </Box>

        {/* Table container with scrollable behavior on mobile */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Connector</TableCell>
                <TableCell>Description</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredConnectors.length > 0 ? (
                filteredConnectors.map((connector, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Box display="flex gap-2" alignItems="center">
                        {connector.icon}
                        <Typography variant="body1">{connector.name}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{connector.description}</TableCell>
                    <TableCell align="right">
                      <Button onClick={handleSelect} variant="contained" color="primary">
                        Select
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    <Typography>No connectors found</Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </DashboardLayout>
  );
};

export default Destination;
