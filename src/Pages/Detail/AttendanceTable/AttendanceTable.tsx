import React from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import DatePick from 'Components/DatePick';
import { cn } from 'utils';
import { getAttendanceData, updateAttandance } from 'APIs/Attendance';
import { AttendanceDataType } from './type';
import css from './AttendanceTable.module.scss';

type AttendanceTableProps = {
  newbieId: number;
};

const AttendanceTable = ({ newbieId }: AttendanceTableProps) => {
  const queryClient = useQueryClient();
  const { data: attendanceData } = useQuery<AttendanceDataType>(
    ['attendanceData'],
    () => getAttendanceData(newbieId),
  );
  const updateAttendanceMutation = useMutation(updateAttandance, {
    onSuccess: () => queryClient.invalidateQueries(['attendanceData']),
    onError: () => {
      alert('다시 시도해주세요.');
      return;
    },
  });
  const handleDate = async (name: string, date: Date) => {
    updateAttendanceMutation.mutate({
      newbie_id: newbieId,
      class_name: name,
      date,
    });
  };

  return (
    <div className={css.container}>
      <div className={css.infoBox}>
        <label className={cn(css.label, css.dateLabel)}>
          <span className={css.labelName}>OT</span>
          <DatePick
            onHandleDate={handleDate}
            name={'orientation'}
            selectedDate={attendanceData?.orientation}
          />
        </label>
        <label className={cn(css.label, css.dateLabel)}>
          <span className={css.labelName}>1차 교육</span>
          <DatePick
            onHandleDate={handleDate}
            name={'first_class'}
            selectedDate={attendanceData?.firstClass}
            disabled={!attendanceData?.orientation}
          />
        </label>
        <label className={cn(css.label, css.dateLabel)}>
          <span className={css.labelName}>2차 교육</span>
          <DatePick
            onHandleDate={handleDate}
            name={'second_class'}
            selectedDate={attendanceData?.firstClass}
            disabled={!attendanceData?.firstClass}
          />
        </label>
        <label className={cn(css.label, css.dateLabel)}>
          <span className={css.labelName}>3차 교육</span>
          <DatePick
            onHandleDate={handleDate}
            name={'third_class'}
            selectedDate={attendanceData?.thirdClass}
            disabled={!attendanceData?.secondClass}
          />
        </label>
        <label className={cn(css.label, css.dateLabel)}>
          <span className={css.labelName}>4차 교육</span>
          <DatePick
            onHandleDate={handleDate}
            name={'fourth_class'}
            selectedDate={attendanceData?.fourthClass}
            disabled={!attendanceData?.thirdClass}
          />
        </label>
      </div>
    </div>
  );
};

export default AttendanceTable;
