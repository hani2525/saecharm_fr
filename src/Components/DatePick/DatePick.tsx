import React, { useState } from "react";
import { Picklist, PicklistOption, DatePicker } from "react-rainbow-components";

const DatePick = () => {
  const initialState = {
    date: new Date(),
    locale: { name: "ko-KO" },
  };

  const containerStyles = {
    maxWidth: 500,
  };

  const [date, setDate] = useState(initialState.date);

  return (
    <div>
      <div
        className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
        style={containerStyles}
      >
        <DatePicker
          id="datePicker-1"
          value={date}
          onChange={(value) => setDate(value)}
          label=""
          formatStyle="large"
          locale={initialState.locale.name}
        />
      </div>
    </div>
  );
};

export default DatePick;
