import React from 'react';
import css from './InfoBox.module.scss';

interface Props {
  valueName: string;
  value: string;
}

const InfoBox = ({ valueName, value }: Props) => {
  return (
    <div className={css.infoBox}>
      <span className={css.valueName}>{valueName}</span>
      <div className={css.value}>{value}</div>
    </div>
  );
};

export default InfoBox;
