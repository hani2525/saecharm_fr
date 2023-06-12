import GNB from "Components/GNB";
import BASE_URL from "config";
import React, { useEffect, useState } from "react";
import Area from "./Area";
import { List } from "./Area/type";
import css from "./Main.module.scss";

const Main = () => {
  const [newbiesData, setNewbiesData] = useState<any[]>();

  useEffect(() => {
    fetch(`${BASE_URL}/newbies`)
      .then((res) => res.json())
      .then((data) => setNewbiesData(data.data));
  }, []);

  return (
    <>
      <GNB />
      <div className={css.container}>
        <div className={css.title}>📋 새가족 현황 (12명)</div>
        <div className={css.boardWrapper}>
          {newbiesData &&
            newbiesData.map(
              (step: { list: List[]; step: string; id: number }) => {
                return <Area list={step.list} step={step.step} key={step.id} />;
              }
            )}
        </div>
      </div>
    </>
  );
};

export default Main;
