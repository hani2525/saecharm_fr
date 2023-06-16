import React from "react";
import { NavLink } from "react-router-dom";
import { GNB_ITEMS } from "./data";
import css from "./GNB.module.scss";
import logo from "./new_charm_logo.png";

const GNB = () => {
  const name = localStorage.getItem("name");
  const id = Number(localStorage.getItem("id"));

  const goLogOut = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    window.location.reload();
  };

  //TODO: type 지정

  const easterEgg: any = {
    1: "하나님이 사랑하고 청년들이 사랑하는 윤인덕 목사님 최고! 👍",
    2: "기도의 용사 오향록 전도사님! 언제나 감사합니다 💘",
    3: "참청 차은우 배서권 전도사님! 배전도사님의 소망은 오직 저 하늘에~ 🎶",
    4: "최강 팀장 임채은👩‍🎤 채은이는 새가족의 든든하고 귀한 존재입니다 💕",
    5: "내가 생각하는 그 사람은 예수의 보혈의 가치를 가진 사람이다",
    6: "항상 다른 이를 열심히 섬기는 원석! 하나님이 보시고 기뻐하신다 🧡",
    7: "하나님의 귀여운 꽃강아지 선우 🐶 너로 인해 하나님은 웃으신다!",
    8: "하나님이 사랑하시는 아들 종우 👍 하나님은 너의 삶을 이끄신다!",
  };

  const clickLogo = () => {
    alert(easterEgg[id]);
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
        <span className={css.userInfo}>안녕하세요 {name} 목자님</span>
        <div className={css.logoutButton} onClick={goLogOut}>
          로그아웃
        </div>
      </div>
    </div>
  );
};

export default GNB;
