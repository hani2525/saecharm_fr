import DatePick from "Components/DatePick";
import React, { useEffect, useState } from "react";
import { cn } from "utils";
import BASE_URL from "config";
import css from "./AttendanceTable.module.scss";

type AttendanceTableProps = {
  newbieId: number;
};

const AttendanceTable = ({ newbieId }: AttendanceTableProps) => {
  const [attendanceData, setAttendanceData] = useState<any>();

  useEffect(() => {
    fetch(`${BASE_URL}/attendance/info/${newbieId}`)
      .then((res) => res.json())
      .then((data) => setAttendanceData(data.data[0]));
  }, []);

  const handleDate = (name: string, date: Date) => {
    fetch(`${BASE_URL}/attendance`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newbie_id: newbieId,
        class_name: name,
        date,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className={css.container}>
      <div className={css.infoBox}>
        <label className={cn(css.label, css.dateLabel)}>
          <span className={css.labelName}>OT</span>
          <DatePick
            onHandleDate={handleDate}
            name={"orientation"}
            selectedDate={attendanceData?.orientation}
          />
        </label>
        <label className={cn(css.label, css.dateLabel)}>
          <span className={css.labelName}>1차 교육</span>
          <DatePick
            onHandleDate={handleDate}
            name={"first_class"}
            selectedDate={attendanceData?.firstClass}
            disabled={!attendanceData?.orientation}
          />
        </label>
        <label className={cn(css.label, css.dateLabel)}>
          <span className={css.labelName}>2차 교육</span>
          <DatePick
            onHandleDate={handleDate}
            name={"second_class"}
            selectedDate={attendanceData?.firstClass}
            disabled={!attendanceData?.firstClass}
          />
        </label>
        <label className={cn(css.label, css.dateLabel)}>
          <span className={css.labelName}>3차 교육</span>
          <DatePick
            onHandleDate={handleDate}
            name={"third_class"}
            selectedDate={attendanceData?.thirdClass}
            disabled={!attendanceData?.firstClass}
          />
        </label>
        <label className={cn(css.label, css.dateLabel)}>
          <span className={css.labelName}>4차 교육</span>
          <DatePick
            onHandleDate={handleDate}
            name={"fourth_class"}
            selectedDate={attendanceData?.fourthClass}
            disabled={!attendanceData?.firstClass}
          />
        </label>
      </div>
    </div>
  );
};

export default AttendanceTable;
