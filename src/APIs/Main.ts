import BASE_URL from 'config';

const getNewbiesData = async () => {
  const user_type = Number(localStorage.getItem('id')) === 11 ? 2 : 1;
  const data = await fetch(`${BASE_URL}/newbies/${user_type}}`).then(res =>
    res.json(),
  );
  return data.data;
};

export { getNewbiesData };
