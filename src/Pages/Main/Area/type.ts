export type List = {
  id: number;
  name: string;
  firstDate: string;
  birthDate: string;
  isBaptized: boolean;
  address: string;
  phoneNumber: string;
  guide: string;
  job: string;
  note: string;
  responsibility: string;
  team: string;
  attendance: Attendance;
  memo: Memo[];
};

export type Attendance = {
  orientation: string;
  first: string;
  second: string;
  third: string;
  fourth: string;
  isCompleted: boolean;
};

export type Memo = {
  id: number;
  writer: string;
  content: string;
  date: string;
};
