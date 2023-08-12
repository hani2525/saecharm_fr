import React from 'react';
import { useQuery } from '@tanstack/react-query';
import GNB from 'Components/GNB';
import { getMembersbyTeam } from 'APIs/Team';
import Village from './Village';
import css from './Table.module.scss';

const Table = () => {
  const { data } = useQuery(['membersData'], getMembersbyTeam);
  const teamsArr = Object.entries(data);

  return (
    <>
      <GNB />
      <div className={css.container}>
        <div className={css.title}>💒 목장 편성표</div>
        <div className={css.boardWrapper}>
          {teamsArr.map(teams => (
            <Village key={teams[0]} teams={teams} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Table;
