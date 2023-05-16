import GNB from "Components/GNB";
import React from "react";
import css from "./Table.module.scss";
import Village from "./Village";

const Table = () => {
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
