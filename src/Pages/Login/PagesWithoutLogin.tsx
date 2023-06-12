import React from "react";

interface WithoutAuthProps {
  children: React.ReactNode;
}

const PageWithoutLogin: React.FC<WithoutAuthProps> = ({ children }) => {
  return (
    <>
      <>{children}</>
    </>
  );
};

export default PageWithoutLogin;
