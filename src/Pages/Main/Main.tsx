import React from 'react';
import { useQuery } from '@tanstack/react-query';
import GNB from 'Components/GNB';
import { getNewbiesData } from 'APIs/Main';
import Area from './Area';
import { NewbieDataType } from './type';
import css from './Main.module.scss';

const Main = () => {
  const { data: newbiesData } = useQuery<NewbieDataType[]>(
    ['newbiesData'],
    getNewbiesData,
  );

  return (
    <>
      <GNB />
      <div className={css.container}>
        <div className={css.title}>📋 새가족 현황</div>
        <div className={css.boardWrapper}>
          {newbiesData &&
            newbiesData.map((step: NewbieDataType) => {
              return <Area list={step.list} step={step.step} key={step.id} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Main;
