import React, { FC } from "react";

type Props = {
  label: string;
  type: "text" | "email" | "password";
  placeHolder: string;
  value: string;
  setValue: (val: string) => void;
};

const Input: FC<Props> = (props) => {
  const { label, type, value, setValue, placeHolder } = props;
  return (
    <>
      <label className="mb-1 font-bold text-gray-700">{label}</label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
        className="border border-gray-300 p-2 rounded-md text-black"
        placeholder={placeHolder}
      />
    </>
  );
};

export default Input;
