import React from 'react';
import css from './RadioInput.module.scss';

interface Props {
  labelName: string;
  name: string;
  id: string;
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioInput = ({ labelName, name, id, value, onChange }: Props) => {
  return (
    <label>
      <span className={css.labelName}>{labelName}</span>
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default RadioInput;
