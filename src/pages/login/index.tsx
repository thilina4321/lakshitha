import { useEffect, useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Head from "next/head";
import Image from "next/image";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Box, CircularProgress } from "@mui/material";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    type: "success" as "success" | "error",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    // If token is not present, redirect to login page
    if (token) {
      window.location.replace("/dashboard");
    } else {
      setLoading(false); // Stop loading if token is present
    }
  }, []);

  const loginHandler = async () => {
    if (email === "lnal@gmail.com" && password === "abc@123") {
      setNotification({
        open: true,
        message: "Login successful!",
        type: "success",
      });
      await localStorage.setItem("token", "hello");
      window.location.replace("/dashboard");
      //   router.push("/dashboard");
      // Delay navigation for better UX
    } else {
      setNotification({
        open: true,
        message: "Invalid email or password.",
        type: "error",
      });
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  const handleClose = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 justify-center min-h-screen bg-gray-50 px-4">
      <Head>
        <title>Login Page</title>
      </Head>

      {/* Left side: Image */}
      <div className="w-full md:w-1/2 h-auto md:h-screen flex items-center justify-center">
        <Image
          src="/login.png"
          alt="Login Illustration"
          layout="intrinsic"
          width={600}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Right side: Form */}
      <div className="w-full md:w-1/2 h-auto md:h-screen flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-8 shadow-xl rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Welcome Back</h2>
          <div className="space-y-6">
            <div className="flex flex-col">
              <Input
                label="Email"
                value={email}
                setValue={(val: string) => setEmail(val)}
                placeHolder="Enter your email"
                type="email"
              />
            </div>

            <div className="flex flex-col">
              <Input
                label="Password"
                value={password}
                setValue={(val: string) => setPassword(val)}
                placeHolder="Enter your password"
                type="password"
              />
            </div>

            <Button name="Login" onClick={loginHandler} />
          </div>
        </div>
      </div>

      {/* Notification */}
      <Snackbar
        open={notification.open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity={notification.type}>
          {notification.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default LoginPage;
