import GNB from "Components/GNB";
import React, { useEffect } from "react";
import css from "./Table.module.scss";
import Village from "./Village";

const Table = () => {
  //전체 목장 목록 가져오기
  useEffect(() => {
    fetch("http://localhost:3306/members")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <GNB />
      <div className={css.container}>
        <div className={css.title}>💒 목장 편성표</div>
        <div className={css.boardWrapper}>
          <Village />
          <Village />
          <Village />
          <Village />
          <Village />
          <Village />
        </div>
      </div>
    </>
  );
};

export default Table;
