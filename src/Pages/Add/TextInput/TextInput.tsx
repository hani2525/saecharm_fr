import React from 'react';
import css from './TextInput.module.scss';

interface Props {
  labelName: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({ labelName, name, onChange }: Props) => {
  return (
    <label className={css.label}>
      <span className={css.labelName}>{labelName}</span>
      <input
        type="text"
        className={css.input}
        name={name}
        onChange={onChange}
      />
    </label>
  );
};

export default TextInput;
