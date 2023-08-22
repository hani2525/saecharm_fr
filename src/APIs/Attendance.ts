import BASE_URL from 'config';
import { UpdatedAttendanceDataType } from 'Pages/Detail/AttendanceTable/type';

const getAttendanceData = async (newbieId: number) => {
  const data = await fetch(`${BASE_URL}/attendance/info/${newbieId}`).then(
    res => res.json(),
  );
  return data.data[0];
};

const updateAttandance = async (
  updatedAttendanceData: UpdatedAttendanceDataType,
) => {
  return await fetch(`${BASE_URL}/attendance`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedAttendanceData),
  }).then(res => res.json());
};

export { getAttendanceData, updateAttandance };
