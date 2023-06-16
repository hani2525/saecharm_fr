import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface AuthProps {
  children: React.ReactNode;
}

const PageWithLogin: React.FC<AuthProps> = ({ children }) => {
  const navigate = useNavigate();
  const isLogged = localStorage.getItem("access_token");
  useEffect(() => {
    if (!isLogged) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
  });

  if (!isLogged) {
    return <></>;
  }

  return (
    <>
      <>{children}</>
    </>
  );
};

export default PageWithLogin;
