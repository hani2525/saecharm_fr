import React from 'react';
import { cn } from 'utils';
import css from './SelectInput.module.scss';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput = ({ onChange }: Props) => {
  return (
    <label className={cn(css.label, css.selectLabel)}>
      * 담당목자
      <select
        name="responsibility"
        id="responsibility"
        className={css.select}
        onChange={onChange}
      >
        <option value="">담당 목자를 선택해주세요</option>
        <option value={6}>지원석</option>
        <option value={5}>전하은</option>
        <option value={7}>임선우</option>
        <option value={8}>황종우</option>
      </select>
    </label>
  );
};

export default SelectInput;
