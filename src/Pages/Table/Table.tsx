import React from 'react';
import { useQuery } from '@tanstack/react-query';
import GNB from 'Components/GNB';
import { getMembersbyTeam } from 'APIs/Team';
import { MemberTypeObj } from './type';
import Village from './Village';
import css from './Table.module.scss';

const Table = () => {
  const { data: membersData } = useQuery(['membersData'], getMembersbyTeam);

  const membersArr = membersData && Object.entries(membersData);

  return (
    <>
      <GNB />
      <div className={css.container}>
        <div className={css.title}>💒 목장 편성표</div>
        <div className={css.boardWrapper}>
          {membersArr &&
            membersArr.map((member: MemberTypeObj) => (
              <Village key={member.villageNum} teams={member.memberTypeObj} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Table;
