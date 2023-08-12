import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from 'utils';
import { checkUserAccount } from 'APIs/Login';
import { UserInfoType } from './type';
import css from './Login.module.scss';

const Login = () => {
  const navigate = useNavigate();
  const isLogged = localStorage.getItem('access_token');

  useEffect(() => {
    if (isLogged) {
      navigate('/list/main');
    }
  }, []);

  const [userInfo, setUserInfo] = useState<UserInfoType>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserInfo(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  const handleLogin = async () => {
    if (!userInfo?.account || !userInfo?.password) {
      alert('아이디 또는 비밀번호를 입력해주세요.');
      return;
    }
    const isUser = checkUserAccount({
      account: userInfo.account,
      password: userInfo.password,
    });

    if (await isUser) {
      navigate('/list/main');
    }
  };

  return (
    <div className={css.container}>
      <div className={css.logoWrapper}>
        <img className={css.logo} src={'/sae_charm_logo.png'} alt="logo" />
        <img className={css.title} src={'/sae_charm_title.png'} alt="logo" />
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
            onKeyDown={e => handleClick(e)}
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
