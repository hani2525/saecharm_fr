import React, { useEffect, useState } from 'react';
import GNB from 'Components/GNB';
import BASE_URL from 'config';
import Village from './Village';
import css from './Table.module.scss';

const Table = () => {
  //전체 목장 목록 가져오기
  const [teamsByVillage, setTeamsByVillage] = useState({});

  useEffect(() => {
    fetch(`${BASE_URL}/members`)
      .then(res => res.json())
      .then(data => setTeamsByVillage(data.data));
  }, []);

  const teamsArr = Object.entries(teamsByVillage);
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
