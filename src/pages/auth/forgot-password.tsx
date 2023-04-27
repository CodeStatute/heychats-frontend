import { withOutAuth } from "#/services";
import React from "react";

const ForgotPassword = (): JSX.Element => {
  return <div className="text-base-content">forgotpassword</div>;
};

export default withOutAuth(ForgotPassword);
