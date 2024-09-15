import Button from "@/components/Button";
import Input from "@/components/Input";
import Image from "next/image";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async () => {};

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full md:w-1/2 h-auto md:h-screen flex items-center justify-center">
        <Image
          src="/login.png"
          alt="Login Illustration"
          layout="intrinsic"
          width={600}
          height={600}
          className="w-full h-auto"
        />
      </div>

      <div className="w-full md:w-1/2 h-auto md:h-screen flex items-center justify-center">
        <div className="w-full bg-white p-6 py-16 shadow-lg rounded-lg">
          <form className="space-y-6">
            <div className="flex flex-col">
              <Input
                lable="Email"
                value={email}
                setValue={(val: string) => setEmail(val)}
                placeHolder="Enter your email"
                type="email"
              />
            </div>

            <div className="flex flex-col">
              <Input
                lable="Password"
                value={password}
                setValue={(val: string) => setPassword(val)}
                placeHolder="Enter your passwprd"
                type="password"
              />
            </div>

            <Button name="Login" onClick={loginHandler} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
