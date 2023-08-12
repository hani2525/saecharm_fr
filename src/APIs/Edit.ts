import BASE_URL from 'config';
import { NewbieDataType } from 'Pages/Add/type';

const editNewbie = async (newbieData: NewbieDataType) => {
  return await fetch(`${BASE_URL}/newbies/additional-info`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newbieData),
  }).then(res => res.json());
};

export { editNewbie };
