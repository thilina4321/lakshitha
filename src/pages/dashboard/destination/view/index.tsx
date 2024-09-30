import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Card,
  CardContent,
  IconButton,
  Button,
  Chip,
  useMediaQuery,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import BigQueryIcon from "@mui/icons-material/CloudQueue"; // Example BigQuery Icon
import { useTheme } from "@mui/material/styles";
import DashboardLayout from "../..";
import Head from "next/head";

const destinations = [
  {
    name: "Warehouse",
    type: "BigQuery",
    status: "Connected",
    admin: "Dilesh",
  },
  {
    name: "Test",
    type: "BigQuery",
    status: "Incomplete",
    admin: "Dilesh",
  },
];

const ConnectedDestinations: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <DashboardLayout>
      <Head>
        <title>Connected Destinations</title>
      </Head>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%", padding: "16px" }}>
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <Typography variant="h4">Connected Destinations</Typography>
          <Button variant="contained" color="primary">
            Add Destination
          </Button>
        </Box>

        {/* Check if it's mobile */}
        {isMobile ? (
          // Mobile: Display as Cards
          <Box display="flex" flexDirection="column" gap={2}>
            {destinations.map((destination, index) => (
              <Card key={index}>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Avatar sx={{ mr: 2 }}>
                      <BigQueryIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="h6">{destination.name}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {destination.type}
                      </Typography>
                    </Box>
                  </Box>
                  <Chip
                    label={destination.status}
                    color={destination.status === "Connected" ? "success" : "warning"}
                    sx={{ mb: 2 }}
                  />
                  <Typography variant="body2">Admin: {destination.admin}</Typography>
                  <Box display="flex" justifyContent="flex-end" mt={2}>
                    <IconButton color="error">
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        ) : (
          // Desktop: Display as Table
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Admin</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {destinations.map((destination, index) => (
                  <TableRow key={index}>
                    <TableCell>{destination.name}</TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <Avatar sx={{ mr: 2 }}>
                          <BigQueryIcon />
                        </Avatar>
                        <Typography variant="body1">{destination.type}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={destination.status}
                        color={destination.status === "Connected" ? "success" : "warning"}
                      />
                    </TableCell>
                    <TableCell>{destination.admin}</TableCell>
                    <TableCell align="right">
                      <IconButton color="error">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </DashboardLayout>
  );
};

export default ConnectedDestinations;
