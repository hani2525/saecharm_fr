import React, { useEffect, useState } from 'react';
import GNB from 'Components/GNB';
import BASE_URL from 'config';
import Area from './Area';
import { NewbiesDataType } from './type';
import css from './Main.module.scss';

const Main = () => {
  const [newbiesData, setNewbiesData] = useState<NewbiesDataType[]>();
  const user_type = Number(localStorage.getItem('id')) === 11 ? 2 : 1;
  useEffect(() => {
    fetch(`${BASE_URL}/newbies/${user_type}`)
      .then(res => res.json())
      .then(data => setNewbiesData(data.data));
  }, []);

  return (
    <>
      <GNB />
      <div className={css.container}>
        <div className={css.title}>📋 새가족 현황</div>
        <div className={css.boardWrapper}>
          {newbiesData &&
            newbiesData.map(step => {
              return <Area list={step.list} step={step.step} key={step.id} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Main;
