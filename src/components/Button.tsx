import React, { FC } from "react";

type Props = {
  name: string;
  onClick: () => void;
};

const Button: FC<Props> = (props) => {
  const { name, onClick } = props;

  return (
    <button
      onClick={onClick}
      type="submit"
      className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 cursor-pointer"
    >
      {name}
    </button>
  );
};

export default Button;
