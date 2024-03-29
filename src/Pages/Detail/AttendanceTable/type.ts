export type AttendanceDataType = {
  orientation: string;
  firstClass: string;
  secondClass: string;
  thirdClass: string;
  fourthClass: string;
};

export type UpdatedAttendanceDataType = {
  newbie_id: number;
  class_name: string;
  date: Date;
};
