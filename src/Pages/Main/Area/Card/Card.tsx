import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './Card.module.scss';

interface Props {
  id: number;
  name: string;
  responsibility: string;
  firstDate: string;
}

const Card = ({ id, name, responsibility }: Props) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/detail/${id}`);
  };
  return (
    <div className={css.container} onClick={goDetail}>
      <div className={css.infoBox}>
        <span className={css.name}>{name}</span>
        <span className={css.manager}>{responsibility}</span>
      </div>
    </div>
  );
};

export default Card;
