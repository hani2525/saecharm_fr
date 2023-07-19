import React from 'react';
import { ListType } from '../type';
import Card from './Card';
import css from './Area.module.scss';

interface Props {
  step: number;
  list: ListType[];
}

const Area = ({ list, step }: Props) => {
  return (
    <div className={css.container}>
      <div className={css.step}>
        <span>{step}</span>
        <span>({list ? list.length : 0}명)</span>
      </div>
      {list &&
        list.map(({ id, name, responsibility }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              responsibility={responsibility}
            />
          );
        })}
    </div>
  );
};

export default Area;
