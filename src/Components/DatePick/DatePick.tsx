import React, { useState } from "react";
import { DatePicker } from "react-rainbow-components";

type DatePickProps = {
  name: string;
  selectedDate?: Date;
  onHandleDate: (name: string, date: Date) => void;
  disabled?: boolean;
};
// TODO: disabled 기능

const DatePick = ({
  name,
  selectedDate,
  onHandleDate,
  disabled,
}: DatePickProps) => {
  const initialState = {
    date: selectedDate ? new Date(selectedDate) : new Date(),
    locale: { name: "ko-KO" },
  };

  console.log(disabled, "disabled", name);

  const containerStyles = {
    maxWidth: 500,
  };

  const [date, setDate] = useState(initialState.date);

  const handlePickDate = (value: any) => {
    if (window.confirm("날짜를 선택하시겠습니까?")) {
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
          onChange={(value) => handlePickDate(value)}
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
