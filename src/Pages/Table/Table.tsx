import React from 'react';
import GNB from 'Components/GNB';
import Village from './Village';
import css from './Table.module.scss';

const Table = () => {
  //전체 목장 목록 가져오기

  return (
    <>
      <GNB />
      <div className={css.container}>
        <div className={css.title}>💒 목장 편성표</div>
        <div className={css.boardWrapper}>
          <Village />
          <Village />
          <Village />
          <Village />
          <Village />
          <Village />
        </div>
      </div>
    </>
  );
};

export default Table;
