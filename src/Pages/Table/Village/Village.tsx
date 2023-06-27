import React from 'react';
import Pasture from '../Pasture';
import css from './Village.module.scss';

const Village = () => {
  return (
    <>
      <div className={css.container}>
        <div className={css.info}>
          <span className={css.viilageNumber}>1마을</span>
          <span className={css.elder}> | 백안선 간사님</span>
        </div>
        <div className={css.pastureWrapper}>
          <Pasture />
          <Pasture />
        </div>
      </div>
    </>
  );
};

export default Village;
