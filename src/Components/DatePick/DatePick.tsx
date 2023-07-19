import React, { useEffect, useState } from 'react';
import { DatePicker } from 'react-rainbow-components';

interface DatePickProps {
  name: string;
  selectedDate?: string;
  onHandleDate: (name: string, date: Date) => void;
  disabled?: boolean;
}

const DatePick = ({
  name,
  selectedDate,
  onHandleDate,
  disabled,
}: DatePickProps) => {
  const initialState = {
    date: selectedDate ? selectedDate : new Date(),
    locale: { name: 'ko-KO' },
  };

  const containerStyles = {
    maxWidth: 500,
  };
  const [date, setDate] = useState<Date | string>(new Date());

  useEffect(() => {
    setDate(selectedDate || new Date());
  }, [selectedDate]);

  const handlePickDate = (value: Date) => {
    if (window.confirm('날짜를 선택하시겠습니까?')) {
      onHandleDate(name, value);
      setDate(value);
    } else return;
  };

  return (
    <div>
      <div
        className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
        style={containerStyles}
      >
        <DatePicker
          id="datePicker-1"
          value={date}
          onChange={value => handlePickDate(value)}
          label=""
          formatStyle="large"
          locale={initialState.locale.name}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default DatePick;
