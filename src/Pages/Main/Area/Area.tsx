import React from 'react';
import Card from './Card';
import { List } from './type';
import css from './Area.module.scss';

interface Props {
  list: List[];
  step: string;
}

const Area = ({ list, step }: Props) => {
  return (
    <div className={css.container}>
      <div className={css.step}>
        <span>{step}</span>
        <span>({list ? list.length : 0}명)</span>
      </div>
      {list &&
        list.map(({ id, name, responsibility, firstDate }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              responsibility={responsibility}
              firstDate={firstDate}
            />
          );
        })}
    </div>
  );
};

export default Area;
