import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './GNB.module.scss';
import { GNB_ITEMS } from './data';

const GNB = () => {
  const name = localStorage.getItem('name');

  const goLogOut = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('name');
    localStorage.removeItem('id');
    window.location.reload();
  };

  return (
    <div className={css.container}>
      <div className={css.logoMenuBox}>
        <img className={css.logo} src={'/sae_charm_logo.png'} alt="logo" />
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
        <span className={css.userInfo}>안녕하세요 {name} 목자님</span>
        <div className={css.logoutButton} onClick={goLogOut}>
          로그아웃
        </div>
      </div>
    </div>
  );
};

export default GNB;
