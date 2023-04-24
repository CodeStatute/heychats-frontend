import React from "react";
import ButtonBase from "./ButtonBase";
import { ButtonProps } from "#/types";

const ButtonSecondary: React.FC<ButtonProps> = ({ text, ...rest }) => {
  return (
    <ButtonBase
      text={text ? text : "Secondary"}
      otherClasses="bg-secondary text-secondary-content hover:bg-secondary-focus"
      {...rest}
    />
  );
};

export default ButtonSecondary;
