import React from 'react';
import Member from '../Member';
import { MemberDataType } from '../type';
import css from './Team.module.scss';

interface Props {
  teamNumber: number;
  teamData: MemberDataType[];
}

const Team = ({ teamNumber, teamData }: Props) => {
  return (
    <>
      <div className={css.container}>
        <div className={css.teamName}>{`${teamNumber} 목장`}</div>
        <div className={css.sheepList}>
          {teamData &&
            teamData.map(member => {
              return <Member key={member.name} memberData={member} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Team;
