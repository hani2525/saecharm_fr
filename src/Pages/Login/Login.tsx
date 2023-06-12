import React, { useEffect, useState } from "react";
import css from "./Login.module.scss";
import logo from "./new_charm_logo.png";
import title from "./sae_charm.png";
import { cn } from "utils";
import { useNavigate } from "react-router-dom";
import BASE_URL from "config";

const Login = () => {
  const navigate = useNavigate();
  const isLogged = localStorage.getItem("access_token");

  useEffect(() => {
    if (isLogged) {
      navigate("/list/main");
    }
  }, []);

  const [userInfo, setUserInfo] = useState({
    account: null,
    password: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  const handleLogin = () => {
    if (!userInfo.account || !userInfo.password) {
      alert("아이디 또는 비밀번호를 입력해주세요.");
      return;
    }

    fetch(`${BASE_URL}/admin/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        account: userInfo.account,
        password: userInfo.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "LOGIN_SUCCESS") {
          localStorage.setItem("access_token", res.accessToken);
          localStorage.setItem("name", res.name);
          localStorage.setItem("id", res.id);
          navigate("/list/main");
        } else {
          alert("아이디 또는 비밀번호를 확인해주세요.");
        }
      });
  };

  return (
    <div className={css.container}>
      <div className={css.logoWrapper}>
        <img className={css.logo} src={logo} alt="logo" />
        <img className={css.title} src={title} alt="logo" />
      </div>
      <div className={css.inputLoginBox}>
        <div className={css.inputWrapper}>
          <input
            type="text"
            className={cn(css.idInput, css.input)}
            name="account"
            placeholder="아이디 입력"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            className={cn(css.pwInput, css.input)}
            placeholder="비밀번호 입력"
            onChange={handleChange}
            onKeyDown={(e) => handleClick(e)}
          />
        </div>
        <div className={css.loginBtn} onClick={handleLogin}>
          로그인
        </div>
      </div>
    </div>
  );
};

export default Login;
