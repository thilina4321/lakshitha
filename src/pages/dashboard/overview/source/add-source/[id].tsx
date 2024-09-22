/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import DashboardLayout from "@/pages/dashboard";
import Head from "next/head";

const FormComponent: React.FC = () => {
  // State management using useState
  const [formData, setFormData] = useState({
    serviceHost: "",
    servicePort: "1708",
    accountId: "",
    dataSource: "NetSuite2.com",
    consumerKey: "",
    consumerSecret: "",
    tokenId: "",
    tokenSecret: "",
    roleId: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <DashboardLayout>
      <Head>
        <title>Add Source</title>
      </Head>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ maxWidth: 600, margin: "auto", padding: 2 }}
      >
        <Typography variant="h5" gutterBottom>
          NetSuite Configuration
        </Typography>

        <TextField
          label="Service Host"
          name="serviceHost"
          value={formData.serviceHost}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Service Port"
          name="servicePort"
          value={formData.servicePort}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Account ID"
          name="accountId"
          value={formData.accountId}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <Typography variant="subtitle1" marginTop={2}>
          Data Source
        </Typography>

        <RadioGroup name="dataSource" value={formData.dataSource} onChange={handleChange}>
          <FormControlLabel
            value="NetSuite2.com"
            control={<Radio />}
            label={
              <Box>
                <Typography>NetSuite2.com</Typography>
                <Typography variant="body2" color="textSecondary">
                  NetSuite2.com is NetSuite's default, and recommended source.
                </Typography>
              </Box>
            }
          />
        </RadioGroup>

        <TextField
          label="Consumer Key"
          name="consumerKey"
          value={formData.consumerKey}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Consumer Secret"
          name="consumerSecret"
          value={formData.consumerSecret}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Token ID"
          name="tokenId"
          value={formData.tokenId}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Token Secret"
          name="tokenSecret"
          value={formData.tokenSecret}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Role ID"
          name="roleId"
          value={formData.roleId}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <Box display="flex" justifyContent="flex-end" sx={{ mt: 3 }}>
          <Button type="submit" variant="contained" color="primary">
            Save & Test
          </Button>
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default FormComponent;
