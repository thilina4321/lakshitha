import React, { useState } from "react";
import {
  Typography,
  Box,
  TextField,
  Button,
  FormControlLabel,
  Switch,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import BigQueryIcon from "@mui/icons-material/CloudQueue"; // Icon for BigQuery
import DashboardLayout from "../../index"; // Import your DashboardLayout
import Head from "next/head";

const ConfigureBigQuery: React.FC = () => {
  const [useServiceAccount, setUseServiceAccount] = useState(false);
  const [projectId, setProjectId] = useState("");
  const [serviceAccountKey, setServiceAccountKey] = useState("");

  const handleToggleServiceAccount = () => {
    setUseServiceAccount(!useServiceAccount);
  };

  const handleSaveAndTest = () => {
    // Perform save and test logic here
    console.log("Project ID:", projectId);
    console.log("Use own Service Account:", useServiceAccount);
    console.log("Service Account Key:", serviceAccountKey);
  };

  return (
    <DashboardLayout>
      <Head>
        <title>Configure BigQuery</title>
      </Head>

      <Box className="flex flex-col w-full items-start" p={2}>
        <Typography variant="h4" className="mb-4">
          Middleware Connector - BigQuery Configuration
        </Typography>

        <Box display="flex" alignItems="center" mb={4}>
          <BigQueryIcon fontSize="large" />
          <Typography variant="h5" ml={2}>
            BigQuery
          </Typography>
        </Box>

        <Card variant="outlined" sx={{ width: "100%", mb: 4 }}>
          <CardContent>
            {/* Project ID Input */}
            <Typography variant="subtitle1">Project ID</Typography>
            <TextField
              fullWidth
              placeholder="Enter your Project ID"
              value={projectId}
              onChange={(e) => setProjectId(e.target.value)}
              variant="outlined"
              margin="normal"
            />

            {/* Toggle Switch for Service Account */}
            <FormControlLabel
              control={
                <Switch
                  checked={useServiceAccount}
                  onChange={handleToggleServiceAccount}
                  color="primary"
                />
              }
              label="Use own Service Account"
              sx={{ mb: 2 }}
            />
            <Typography variant="body2" color="textSecondary" mb={2}>
              Turn it on if you want to use your service account to process the data instead of a
              third-party service account.
            </Typography>

            {/* Service Account Private Key Input */}
            {useServiceAccount && (
              <>
                <Typography variant="subtitle1" mb={2}>
                  Service Account Private Key
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Enter your Service Account Private Key"
                  value={serviceAccountKey}
                  onChange={(e) => setServiceAccountKey(e.target.value)}
                  variant="outlined"
                  margin="normal"
                />
              </>
            )}
          </CardContent>

          {/* Save & Test Button */}
          <CardActions sx={{ justifyContent: "flex-end", padding: "16px" }}>
            <Button variant="contained" color="primary" onClick={handleSaveAndTest}>
              Save & Test
            </Button>
          </CardActions>
        </Card>
      </Box>
    </DashboardLayout>
  );
};

export default ConfigureBigQuery;
