import React from "react";
import { NavLink } from "react-router-dom";
import { GNB_ITEMS } from "./data";
import css from "./GNB.module.scss";
import logo from "./new_charm_logo.png";

const GNB = () => {
  const clickLogo = () => {
    alert("💘 하나님은 전하은 목자를 사랑하십니다");
  };

  return (
    <div className={css.container}>
      <div className={css.logoMenuBox}>
        <img className={css.logo} src={logo} alt="logo" onClick={clickLogo} />
        <div className={css.menuWrapper}>
          {GNB_ITEMS.map(({ id, path, content }) => (
            <NavLink
              key={id}
              to={path}
              className={({ isActive }) =>
                isActive ? css.selectedMenu : css.menu
              }
            >
              {content}
            </NavLink>
          ))}
        </div>
      </div>
      <div className={css.userBox}>
        <span className={css.userInfo}>안녕하세요 전하은 목자님</span>
        <div className={css.logoutButton}>로그아웃</div>
      </div>
    </div>
  );
};

export default GNB;
