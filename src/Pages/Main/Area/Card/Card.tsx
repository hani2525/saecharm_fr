import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ListType } from 'Pages/Main/type';
import css from './Card.module.scss';

const Card = ({ id, name, responsibility }: ListType) => {
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
