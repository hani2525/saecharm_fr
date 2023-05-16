import React from "react";
import { List } from "./type";
import css from "./Area.module.scss";
import Card from "./Card";

interface Props {
  list: List[];
  step: string;
  key: number;
}

const Area = ({ list, step, key }: Props) => {
  return (
    <div className={css.container}>
      <div className={css.step}>
        {step} ({list.length}명)
      </div>
      {list.map(({ id, name, responsibility, firstDate }) => {
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
