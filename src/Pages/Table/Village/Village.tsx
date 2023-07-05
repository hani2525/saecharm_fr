import React, { useEffect } from 'react';
import Pasture from '../Pasture';
import css from './Village.module.scss';

const Village = ({ teams }: any) => {
  const villageNumber = teams[0];
  const teamArr = Object.entries(teams[1]);
  const firstMember: any = teamArr[0][1];
  const elder: any = firstMember[0].elder;

  return (
    <>
      <div className={css.container}>
        <div className={css.info}>
          <span className={css.viilageNumber}>{villageNumber}마을</span>
          <span className={css.elder}> | {elder} </span>
        </div>
        <div className={css.pastureWrapper}>
          {teamArr.map(team => (
            <Pasture key={team[0]} team={team} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Village;
