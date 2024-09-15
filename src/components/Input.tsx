import React, { FC } from "react";

type Props = {
  lable: string;
  type: "text" | "email" | "password";
  placeHolder: string;
  value: string;
  setValue: (val: string) => void;
};

const Input: FC<Props> = (props) => {
  const { lable, type, value, setValue, placeHolder } = props;
  return (
    <>
      <label className="mb-1 font-bold text-gray-700">{lable}</label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
        className="border border-gray-300 p-2 rounded-md"
        placeholder={placeHolder}
      />
    </>
  );
};

export default Input;
