import BASE_URL from 'config';
import { NewbieToMemberDataType } from 'Pages/Table/type';

const getTeamsData = async () => {
  const data = await fetch(`${BASE_URL}/members/teams`).then(res => res.json());
  return data.data;
};

const assignTeam = async (newbieToMemberData: NewbieToMemberDataType) => {
  return await fetch(`${BASE_URL}/members`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newbieToMemberData),
  }).then(res => res.json());
};

const getMembersByVillage = async () => {
  const data = await fetch(`${BASE_URL}/members`).then(res => res.json());
  return data.data;
};

export { getTeamsData, assignTeam, getMembersByVillage };
