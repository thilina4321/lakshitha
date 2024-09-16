/* eslint-disable react/no-unescaped-entities */
import Button from "@/components/Button";
import Input from "@/components/Input";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async () => {
    // Login logic goes here
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
    </div>
  );
};

export default LoginPage;
