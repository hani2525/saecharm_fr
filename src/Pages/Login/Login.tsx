import React from "react";
import css from "./Login.module.scss";
import logo from "./new_charm_logo.png";
import title from "./sae_charm.png";
import { cn } from "utils";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const goToMain = () => navigate("/main");

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
            placeholder="아이디 입력"
          />
          <input
            type="text"
            className={cn(css.pwInput, css.input)}
            placeholder="비밀번호 입력"
          />
        </div>
        <div className={css.loginBtn} onClick={goToMain}>
          로그인
        </div>
      </div>
    </div>
  );
};

export default Login;
