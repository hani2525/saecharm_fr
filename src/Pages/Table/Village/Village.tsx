import React from 'react';
import Team from '../Team';
import { TeamType } from '../type';
import css from './Village.module.scss';

interface Props {
  teams: string[] | TeamType[];
}

const Village = ({ teams }: any) => {
  const villageNumber = Number(teams[0]);
  const teamArr = Object.entries(teams[1]);

  return (
    <>
      <div className={css.container}>
        <div className={css.info}>
          <span className={css.viilageNumber}>{villageNumber}마을</span>
          {/* <span className={css.elder}> </span> */}
        </div>
        <div className={css.pastureWrapper}>
          {teamArr.map(team => (
            <Team key={team[0]} team={team} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Village;
