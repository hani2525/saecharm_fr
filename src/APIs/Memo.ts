import BASE_URL from 'config';
import { CreateMemoDataType } from 'Pages/Detail/AssignModal/type';

const getMemosData = async (newbieId: number) => {
  const data = await fetch(`${BASE_URL}/memos/${newbieId}`).then(res =>
    res.json(),
  );
  return data.data;
};

const createMemo = async (memoData: CreateMemoDataType) => {
  return await fetch(`${BASE_URL}/memos/new-memo`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(memoData),
  }).then(res => res.json());
};

export { getMemosData, createMemo };
