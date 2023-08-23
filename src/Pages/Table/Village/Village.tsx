import React from 'react';
import Team from '../Team';
import { VillageDataType } from '../type';
import css from './Village.module.scss';

interface Props {
  villageNumber: number;
  villageData: VillageDataType[];
}

const Village = ({ villageNumber, villageData }: Props) => {
  return (
    <>
      <div className={css.container}>
        <div className={css.info}>{villageNumber} 마을</div>
        <div className={css.pastureWrapper}>
          {villageData.map(team => (
            <Team
              key={team.team_id}
              teamNumber={team.team_id}
              teamData={team.team_data}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Village;
