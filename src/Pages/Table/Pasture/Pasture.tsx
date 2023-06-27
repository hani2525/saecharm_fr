import React from 'react';
import css from './Pasture.module.scss';

const Pasture = () => {
  return (
    <>
      <div className={css.container}>
        <div className={css.pastureNumber}>1 목장</div>
        <div className={css.sheepList}>
          <span className={css.leader}>서재정 (1995)</span>
          <span className={css.sheep}>편무현 (1991)</span>
        </div>
      </div>
    </>
  );
};

export default Pasture;
