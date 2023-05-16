import GNB from "Components/GNB";
import React from "react";
import Area from "./Area";
import { SAMPLE_DATA } from "./data";
import css from "./Main.module.scss";

const Main = () => {
  return (
    <>
      <GNB />
      <div className={css.container}>
        <div className={css.title}>📋 새가족 현황 (12명)</div>
        <div className={css.boardWrapper}>
          {SAMPLE_DATA.map((step) => {
            return <Area list={step.list} step={step.step} key={step.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Main;
