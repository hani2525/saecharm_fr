import React from 'react';
import DatePick from 'Components/DatePick';
import { cn } from 'utils';
import css from './DateInput.module.scss';

interface Props {
  labelName: string;
  name: string;
  selectedDate?: string;
  onHandleDate: (name: string, date: Date) => void;
}

const DateInput = ({ labelName, name, selectedDate, onHandleDate }: Props) => {
  return (
    <label className={cn(css.label, css.dateLabel)}>
      <span className={css.labelName}>{labelName}</span>
      <DatePick
        onHandleDate={onHandleDate}
        name={name}
        selectedDate={selectedDate && selectedDate}
      />
    </label>
  );
};

export default DateInput;
